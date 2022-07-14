'use strict'

const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const loadMinified = require('./load-minified')

const env = config.ghPages.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.ghPages.productionSourceMap,
      extract: true
    })
  },
  devtool: config.ghPages.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.ghPages.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.ghPages.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname,
        './service-worker-prod.js'))}</script>`
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.ghPages.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'dnd-helper',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'dist/**/*.{js,html,css}',
        'dist/static/img/**/*.png',
        'dist/static/data/**/*.json',
        'dist/static/css/**/*.{eot,svg,ttf,woff}'
      ],
      minify: true,
      stripPrefix: 'dist/',
      runtimeCaching: [{
        urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/s\/roboto\/v18\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\/vuetify\//,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\//,
        handler: 'cacheFirst'
      }
    ]
    })
  ]
})

if (config.ghPages.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.ghPages.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.ghPages.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
