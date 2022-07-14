<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <!-- Gold -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="pb-0">
              <div class="title font-weight-thin mb-0">Dinheiro</div>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-text-field type="number" label="Ouro" v-model="gold" single-line clearable></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field type="number" label="Prata" v-model="silver" single-line clearable></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field type="number" label="Cobre" v-model="copper" single-line clearable></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout wrap caption>
                <v-flex xs3>Total: </v-flex>
                <v-flex xs3>{{ goldTotal }} po</v-flex>
                <v-flex xs3>{{ silverTotal }} pp</v-flex>
                <v-flex xs3>{{ copperTotal }} pc</v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>

        <!-- Weapons -->
        <v-flex xs12 md4>
          <v-card>
            <v-card-title @click="showWeapons = !showWeapons">
              <v-flex xs11>
                <v-icon class="pr-2">ico-axes</v-icon>
                <span class="subheading">Armas Favoritas</span>
                <span class="caption"> ({{ favoriteWeapons.length }})</span>
              </v-flex>
              <v-flex xs1>
                <v-icon>{{ showWeapons ? "fas fa-angle-up" : "fas fa-angle-down" }}</v-icon>
              </v-flex>
            </v-card-title>
            <v-slide-y-transition hide-on-leave>
              <v-flex v-show="showWeapons">
                <v-flex v-if="favoriteWeapons.length <= 0">
                  Nenhum favorito
                </v-flex>
                <v-expansion-panel v-else class="elevation-0">
                  <v-expansion-panel-content v-for="(item,i) in favoriteWeapons" :key="i" >
                    <div slot="header">
                      <v-layout row subheading font-weight-thin>
                        <v-flex>
                          {{ item.name }}
                        </v-flex>
                      </v-layout>
                      <v-layout row caption style="margin-top: -10px; padding-left: 4px">
                        <v-flex xs6>
                          <v-icon small class="pr-2">ico-death</v-icon>{{ item.damage }}
                        </v-flex>
                        <v-flex xs3>
                          <v-icon small color="info">ico-dice</v-icon> {{ item.dice }}
                        </v-flex>
                        <v-flex xs3>
                          <i class="fas fa-dollar-sign amber--text accent-4"></i>
                          {{ item.value }}
                        </v-flex>
                      </v-layout>
                    </div>
                    <v-card flat>
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
              </v-flex>
            </v-slide-y-transition>

          </v-card>
        </v-flex>

        <!-- Armors -->
        <v-flex xs12 md4>
          <v-card>
            <v-card-title @click="showArmors = !showArmors">
              <v-flex xs11>
                <v-icon class="pr-2">ico-armor</v-icon>
                <span class="subheading">Armaduras Favoritas</span>
                <span class="caption"> ({{ favoriteArmors.length }})</span>
              </v-flex>
              <v-flex xs1>
                <v-icon>{{ showArmors ? "fas fa-angle-up" : "fas fa-angle-down" }}</v-icon>
              </v-flex>
            </v-card-title>
            <v-slide-y-transition hide-on-leave>
              <v-flex v-show="showArmors">
                <v-flex v-if="favoriteArmors.length <= 0">
                  Nenhum favorito
                </v-flex>
                <v-expansion-panel v-show="showArmors" class="elevation-0">
                  <v-expansion-panel-content v-for="(item,i) in favoriteArmors" :key="i">
                    <div slot="header">
                      <v-layout row subheading font-weight-thin>
                        <v-flex>
                          {{ item.name }}
                        </v-flex>
                      </v-layout>
                      <v-layout row caption style="margin-top: -10px; padding-left: 4px">
                        <v-flex xs9>
                          <v-icon small class="pr-2">ico-shield</v-icon>{{ item.ac }}
                        </v-flex>
                        <v-flex xs3>
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
                            <v-icon small class="pr-2">ico-ninja</v-icon> {{ item.stealth_disavantage ? 'furtividade' : ' - '}}
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
              </v-flex>
            </v-slide-y-transition>
          </v-card>
        </v-flex>

        <!-- Spells -->
        <v-flex xs12 md4>
          <v-card>
            <v-card-title @click="showSpells = !showSpells">
              <v-flex xs11>
                <v-icon class="pr-2">ico-crystal</v-icon>
                <span class="subheading">Magias Favoritas</span>
                <span class="caption"> ({{ favoriteSpells.length }})</span>
              </v-flex>
              <v-flex xs1>
                <v-icon>{{ showSpells ? "fas fa-angle-up" : "fas fa-angle-down" }}</v-icon>
              </v-flex>
            </v-card-title>
            <v-slide-y-transition hide-on-leave>
              <v-flex v-show="showSpells">
                <v-flex v-if="favoriteSpells.length <= 0">
                  Nenhum favorito
                </v-flex>
                <v-expansion-panel v-show="showSpells" class="elevation-0">
                  <v-expansion-panel-content v-for="(item,i) in favoriteSpells" :key="i">
                    <div slot="header">
                      <v-layout row subheading font-weight-thin>
                        <v-flex>
                          {{ item.name }}
                        </v-flex>
                      </v-layout>
                      <v-layout row caption style="margin-top: -10px; padding-left: 4px">
                        <v-flex xs9>
                          <v-avatar size="16" style="margin-top:-3px" pr-2>
                            <img :src="`static/img/schools/${item.school.style}.png`">
                          </v-avatar>
                          {{ item.school.pt }}
                        </v-flex>
                        <v-flex xs3>
                          <v-icon small class="pr-2" color="purple">ico-wizard</v-icon>{{ item.level }}
                        </v-flex>
                      </v-layout>  
                    </div>
                    <v-card>
                      <v-card-text>
                        <v-layout body-1>
                          <v-flex xs12 class="pb-2" v-html="item.description"></v-flex>
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      gold: '',
      silver: '',
      copper: '',
      goldTotal: 0,
      silverTotal: 0,
      copperTotal: 0,
      showWeapons: false,
      showArmors: false,
      showSpells: false
    }
  },

  watch: {
    money () {
      this.convert()
    }
  },

  methods: {
    convert () {
      let copperTotal = parseInt(this.money)

      this.goldTotal = 0
      this.silverTotal = 0

      if (copperTotal >= 100) {
        this.goldTotal = parseInt(copperTotal / 100)
        copperTotal = copperTotal % 100
      }

      if (copperTotal >= 10 && copperTotal < 100) {
        this.silverTotal = parseInt(copperTotal / 10)
        copperTotal = copperTotal % 10
      }

      this.copperTotal = copperTotal
    }
  },

  computed: {
    money () {
      let gold = parseInt(this.gold) * 100 || 0
      let silver = parseInt(this.silver) * 10 || 0
      let copper = parseInt(this.copper) || 0
      return copper + silver + gold
    },

    favoriteWeapons () {
      let list = JSON.parse(localStorage.getItem('weaponsList')) || []
      return list.filter(item => item.favorite)
    },

    favoriteArmors () {
      let list = JSON.parse(localStorage.getItem('armorsList')) || []
      return list.filter(item => item.favorite)
    },

    favoriteSpells () {
      let spells = JSON.parse(localStorage.getItem('spellList')) || []
      return spells.filter(spell => spell.favorite)
    }
  }
}
</script>

<style scoped>
.v-text-field input {
  text-align: center
}

.v-text-field {
  margin-top: 0;
  padding-top: 0;
}
</style>
