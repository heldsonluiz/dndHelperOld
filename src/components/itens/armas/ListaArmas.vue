<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-subheader>
            <span class="headline font-weight-thin">{{ title }}</span>
            <span class="caption pl-3"> ({{ weapons.length }})</span>
          </v-subheader>
        </v-flex>
      </v-layout>
      
      <v-slide-y-transition hide-on-leave leave-absolute>
        <loading v-show="loading"></loading>
      </v-slide-y-transition>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="item in weapons" :key="item.name">
          <v-card>
            <v-expansion-panel>
              <v-expansion-panel-content class="list-of-itens">
                <div slot="header">
                  <v-layout row subheading font-weight-thin>
                    <v-flex @click.stop="doFavorite(item)">
                      <v-icon color="amber">
                        {{ item.favorite ? 'star':'star_border' }}
                      </v-icon>
                      {{ item.name }}
                    </v-flex>
                  </v-layout>
                  <v-layout row caption style="margin-top: -10px; padding-left: 4px">
                    <v-flex xs5>
                      <v-icon small class="pr-2">ico-death</v-icon>{{ item.damage }}
                    </v-flex>
                    <v-flex xs3>
                      <v-icon small color="info">ico-dice</v-icon> {{ item.dice }}
                    </v-flex>
                    <v-flex xs4>
                      <i class="fas fa-dollar-sign amber--text accent-4"></i>
                      {{ item.value }}
                    </v-flex>
                  </v-layout>  
                </div>
                <v-card>
                  <v-card-text>
                    <v-layout row wrap caption class="details">
                      <v-flex xs7>
                        <v-icon small class="pr-2">ico-dust</v-icon>{{ item.magic ? 'mágico' : 'não mágico'}}
                      </v-flex>
                      <v-flex xs5>
                        <v-icon small class="pr-2">ico-weight</v-icon>{{ item.weight }}
                      </v-flex>
                      <v-flex xs12 pb-0 v-if="item.properties" body-1>
                        {{ item.properties }}
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
  name: 'lista-armas',
  props: ['tipo', 'title'],
  data () {
    return {
      loading: false,
      weapons: []
    }
  },

  methods: {
    getWeapons () {
      this.loading = true
      setTimeout(() => {
        let weapons = localStorage.getItem('weaponsList') || ''
        if (weapons) {
          this.weapons = JSON.parse(localStorage.getItem('weaponsList')).filter(item => item.range === this.tipo)
          this.loading = false
        }
      }, 500)
    },

    doFavorite (item, event) {
      let weapons = JSON.parse(localStorage.getItem('weaponsList'))
      let pos = weapons.findIndex(weapon => weapon.name.toLocaleLowerCase() === item.name.toLocaleLowerCase())
      weapons[pos].favorite = item.favorite = !item.favorite
      localStorage.setItem('weaponsList', JSON.stringify(weapons))
    }
  },

  mounted () {
    this.getWeapons()
  }
}
</script>

