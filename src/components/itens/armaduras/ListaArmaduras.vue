<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-subheader>
            <span class="headline font-weight-thin">{{ title }}</span>
            <span class="caption pl-3"> ({{ armors.length }})</span>
          </v-subheader>
        </v-flex>
      </v-layout>

      <v-slide-y-transition hide-on-leave leave-absolute>
        <loading v-show="loading"></loading>
      </v-slide-y-transition>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="item in armors" :key="item.name">
          <v-card>
            <v-expansion-panel>
              <v-expansion-panel-content class="list-of-itens">
                <div slot="header">
                  <v-layout row subheading font-weight-thin>
                    <v-flex>
                      <v-icon @click.stop="doFavorite(item)" color="amber">
                        {{ item.favorite ? 'star':'star_border' }}
                      </v-icon>
                      {{ item.name }}
                    </v-flex>
                  </v-layout>
                  <v-layout row caption style="margin-top: -10px; padding-left: 4px">
                    <v-flex xs8>
                      <v-icon small class="pr-2">ico-shield</v-icon>{{ item.ac }}
                    </v-flex>
                    <v-flex xs4>
                      <i class="fas fa-dollar-sign amber--text accent-4"></i>
                      {{ item.cost }}
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
                      <v-flex xs7>
                        <v-icon small class="pr-1">ico-ninja</v-icon> {{ item.stealth_disavantage ? 'furtividade' : ' - '}}
                      </v-flex>
                      <v-flex xs5 >
                        <v-icon small class="pr-2">ico-dumbbell</v-icon>{{ item.strenght_min || ' - ' }}
                      </v-flex>
                      <v-flex xs12 body-1>
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
  name: 'lista-armaduras',
  props: ['title', 'type', 'defense'],
  data () {
    return {
      loading: false,
      armors: []
    }
  },

  methods: {
    getArmors () {
      this.loading = true
      setTimeout(() => {
        let armors = localStorage.getItem('armorsList') || ''
        if (armors) {
          this.armors = JSON.parse(armors).filter(item => item.type === this.type && (this.defense ? item.defense === this.defense : true))
          this.loading = false
        }
      }, 500)
    },

    doFavorite (item) {
      let armors = JSON.parse(localStorage.getItem('armorsList'))
      let pos = armors.findIndex(armor => armor.name.toLocaleLowerCase() === item.name.toLocaleLowerCase())
      armors[pos].favorite = item.favorite = !item.favorite
      localStorage.setItem('armorsList', JSON.stringify(armors))
    }
  },

  mounted () {
    this.getArmors()
  }
}
</script>
