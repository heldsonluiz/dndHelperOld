<template>
  <v-flex xs12>
    <v-text-field label="Nome da magia" single-line solo v-model="name" clearable append-icon="filter_list"
      @click:append="showFilters = !showFilters"></v-text-field>

    <v-slide-y-transition>
      <v-card v-show="showFilters">

        <v-card-text>
          <v-layout>
            <v-flex>
              <v-select label="Nível" single-line v-model="filter.level" :items="levels" clearable></v-select>
            </v-flex>
            <v-flex>
              <v-select label="Classe" single-line v-model="filter.class" :items="classes"
                clearable></v-select>
            </v-flex>
          </v-layout>
          <v-select label="Escola" single-line v-model="filter.school" :items="schools" clearable></v-select>
          <v-layout>
            <v-flex xs6>
              <v-select label="Ordenar" single-line v-model="filter.order" :items="orders"
                item-value="slug" clearable>
                <template slot="selection" slot-scope="{ item }">
                  {{ item.text }}
                </template>
                <template slot="item" slot-scope="{  item }">
                  <v-list-tile-content>
                    {{ item.text }}
                  </v-list-tile-content>
                  <v-spacer></v-spacer>
                  <v-list-tile-action>
                    <v-icon small>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                </template>
              </v-select>
            </v-flex>
            <v-flex xs6>
              <v-switch label="Favoritos" v-model="filter.onlyFavorites"></v-switch>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-slide-y-transition>
  </v-flex>
</template>

<script>
import _debounce from 'lodash/debounce'

export default {
  name: 'SpellFilter',
  props: ['filter'],
  data () {
    return {
      name: '',
      showFilters: false,
      levels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      classes: ['Bárbaro', 'Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Guerreiro',
        'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro'
      ],
      schools: ['Abjuração', 'Adivinhação', 'Conjuração', 'Encantamento', 'Evocação', 'Ilusão',
        'Necromancia', 'Transmutação'
      ],
      orders: [{
        slug: 'nasc',
        icon: 'arrow_upward',
        text: 'Nome'
      },
      {
        slug: 'ndesc',
        icon: 'arrow_downward',
        text: 'Nome'
      },
      {
        slug: 'lasc',
        icon: 'arrow_upward',
        text: 'Nível'
      },
      {
        slug: 'ldesc',
        icon: 'arrow_downward',
        text: 'Nível'
      }
      ]
    }
  },

  watch: {
    name () {
      this.debouncedGetName()
    }
  },

  created () {
    this.debouncedGetName = _debounce(this.getName, 300)
  },

  methods: {
    getName () {
      this.filter.name = this.name
    }
  }
}
</script>
