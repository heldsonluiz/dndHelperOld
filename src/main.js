import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import Loading from '@/components/Loading'
import loadData from '~/data'

loadData()

Vue.use(Vuetify, {
  theme: {
    abjuration: '#1E88E5',
    divination: '#78909C',
    conjuration: '#FB8C00',
    enchantment: '#8E24AA',
    evocation: '#E53935',
    illusion: '#5E35B1',
    necromancy: '#43A047',
    transmutation: '#F9A825',
    primary: '#0288D1'
  }
})

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.component(
  'Loading', Loading
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
