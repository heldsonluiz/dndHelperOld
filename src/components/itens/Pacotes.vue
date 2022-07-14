<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-subheader>
            <span class="headline font-weight-thin">{{ title }}</span>
            <span class="caption pl-3"> ({{ packages.length }})</span>
          </v-subheader>
        </v-flex>
      </v-layout>

      <v-slide-y-transition hide-on-leave leave-absolute>
        <loading v-show="loading"></loading>
      </v-slide-y-transition>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="item in packages" :key="item.name">
          <v-card>
            <v-expansion-panel>
              <v-expansion-panel-content class="list-of-itens">
                <div slot="header">
                  <v-layout row subheading font-weight-thin>
                    <v-flex xs8>
                      {{ item.name }}
                    </v-flex>
                    <v-flex xs4>
                      <v-icon small class="pr-1" color="amber accent-4">fas fa-dollar-sign</v-icon>{{
                      item.value }}
                    </v-flex>
                  </v-layout>
                </div>
                <v-card>
                  <v-card-text>
                    <v-layout row wrap body-1>
                      <v-flex xs12>
                        {{ item.description }}
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'pacotes',
  data () {
    return {
      title: 'Pacotes Iniciais',
      packages: [],
      loading: false
    }
  },
  methods: {
    getPackages () {
      this.loading = true
      setTimeout(() => {
        let packages = localStorage.getItem('packagesList') || ''
        if (packages) {
          this.packages = JSON.parse(packages)
          this.loading = false
        }
      }, 500)
    }
  },

  mounted () {
    this.getPackages()
  }
}
</script>