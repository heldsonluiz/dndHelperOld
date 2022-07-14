<template>
  <v-content>
    <v-container fluid grid-list-lg id="turn-tracker">
      <v-layout row wrap>
        <v-flex xs12 mb-5>
          <v-layout row wrap justify-space-between>
            <v-flex xs12>
              <v-text-field single-line label="Nome" v-model="name"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-space-between>
            <v-flex xs4 py-0>
              <v-text-field type="number" single-line outline v-model="initiative"
                prepend-inner-icon="flash_on"></v-text-field>
            </v-flex>
            <v-flex xs4 py-0>
              <v-text-field type="number" single-line outline v-model="armorClass"
                prepend-inner-icon="ico-shield"></v-text-field>
            </v-flex>
            <v-flex xs4 py-0>
              <v-text-field type="number" single-line outline v-model="healthPoints"
                prepend-inner-icon="favorite_border"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-space-between>
            <v-flex xs6 pb-0>
              <v-btn block flat outline color="error" @click="add(0)">
                <v-icon>add</v-icon>inimigo
              </v-btn>
            </v-flex>
            <v-flex xs6 pb-0>
              <v-btn block flat outline color="info" @click="add(1)">
                <v-icon>add</v-icon>jogador
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout row wrap align-content-start justify-space-between fill-height class="pb-5 mt-3 mb-5">
        <v-flex xs12 sm6 md4 pa-2 pb-3 mx-1 my-2 v-for="(item, i) in players" :id="`item-${item.id}`"
          :key="item.id" @click="openDialog(item)" :class="{ 'item' : true, 'dead' : item.hp <= 0, 'selected' : i === selected }">
          <v-flex :class="{'error--text text--darken-1' : !item.tipo}" subheading text-uppercase
            font-weight-bold>
            {{item.name}}
          </v-flex>
          <v-layout row wrap justify-space-between class="subheading">
            <v-flex xs3>
              <v-icon>flash_on</v-icon>{{item.init}}
            </v-flex>
            <v-flex xs3>
              <v-icon>ico-shield</v-icon>{{item.ca}}
            </v-flex>
            <v-flex xs4>
              <v-icon>favorite_border</v-icon>{{item.hp}}
            </v-flex>
            <v-flex xs2 text-xs-center>
              <v-icon color="red" class="buttons buttons--remove" @click.stop="remove(item)">close</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-dialog v-model="dialog" max-width="360px">
        <v-card>
          <v-card-text>
            <v-layout row wrap align-center justify-space-around class="my-3">
              <v-flex xs12>
                <v-text-field single-line label="Nome" v-model="item.name"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-space-around class="my-3">
              <v-flex xs1>
                <v-icon @click="down('init')" color="red" class="buttons buttons--remove">remove</v-icon>
              </v-flex>
              <v-flex xs4>
                <v-text-field type="number" single-line outline v-model="item.init"
                  prepend-inner-icon="flash_on"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-icon @click="up('init')" color="success" class="buttons buttons--add">add</v-icon>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-space-around class="my-3">
              <v-flex xs1>
                <v-icon @click="down('ca')" color="red" class="buttons buttons--remove">remove</v-icon>
              </v-flex>
              <v-flex xs4>
                <v-text-field type="number" single-line outline v-model="item.ca"
                  prepend-inner-icon="ico-shield"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-icon @click="up('ca')" color="success" class="buttons buttons--add">add</v-icon>
              </v-flex>
            </v-layout>
            <v-layout row wrap align-center justify-space-around class="my-3">
              <v-flex xs1>
                <v-icon @click="down('hp')" color="red" class="buttons buttons--remove">remove</v-icon>
              </v-flex>
              <v-flex xs4>
                <v-text-field type="number" single-line outline v-model="item.hp"
                  prepend-inner-icon="favorite_border"></v-text-field>
              </v-flex>
              <v-flex xs1>
                <v-icon @click="up('hp')" color="success" class="buttons buttons--add">add</v-icon>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-snackbar v-model="snackbar" color="error" top multi-line :timeout=3000>
        Insira "{{this.emptyProperty}}" para continuar
        <v-btn dark flat @click="snackbar = false">
          Fechar
        </v-btn>
      </v-snackbar>
    </v-container>
    <v-btn fixed bottom block class="button--fixedBottom" dark color="green" :disabled="disableNext || this.players.length < 1"
      @click="next">
      <v-icon>navigate_next</v-icon>próximo turno
    </v-btn>
  </v-content>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'turn-tracker',
  data () {
    return {
      title: 'Turn Tracker',
      disableNext: false,
      dialog: false,
      snackbar: false,
      tipo: 0,
      name: '',
      initiative: '',
      armorClass: '',
      healthPoints: '',
      selected: 0,
      players: [],
      item: {},
      emptyProperty: ''
    }
  },

  validations: {
    name: {
      required
    },
    initiative: {
      required
    },
    armorClass: {
      required
    },
    healthPoints: {
      required
    }
  },

  beforeMount () {
    this.players = JSON.parse(localStorage.getItem('playersList')) || []
  },

  beforeDestroy () {
    localStorage.setItem('playersList', JSON.stringify(this.players))
  },

  methods: {
    next () {
      let pos = this.findNextAlive()
      this.validate()
      this.selected = pos
      this.$vuetify.goTo(`#item-${this.players[this.selected].id}`, {
        duration: 300,
        offset: -50,
        easing: 'easeInOutCubic'
      })
    },

    findNextAlive () {
      let next = this.selected + 1
      while (next !== this.selected) {
        if (next >= this.players.length) {
          next = 0
        }
        if (this.players[next].hp > 0) {
          return next
        }
        next++
      }
      return this.selected
    },

    order () {
      this.players = this.players.sort((a, b) => a.init - b.init)
    },

    openDialog (item) {
      this.dialog = true
      this.item = item
    },

    up (prop) {
      this.item[prop]++
    },

    down (prop) {
      this.item[prop]--
    },

    add (tipo) {
      this.$v.$touch()
      this.loading = true
      if (this.$v.$invalid) {
        if (!this.name || this.name === '') {
          this.emptyProperty = 'NOME'
        } else if (!this.initiative || this.initiative === '') {
          this.emptyProperty = 'INICIATIVA'
        } else if (!this.armorClass || this.armorClass === '') {
          this.emptyProperty = 'CA'
        } else if (!this.healthPoints || this.healthPoints === '') {
          this.emptyProperty = 'HP'
        }
        this.snackbar = true
      } else {
        this.players.push({
          id: this.players.length,
          name: this.name,
          ca: this.armorClass || 1,
          init: this.initiative || 1,
          hp: this.healthPoints || 1,
          tipo: tipo
        })

        this.clear()
        this.order()
      }
    },

    remove (item) {
      this.players = this.players.filter(e => e !== item)
    },

    clear () {
      this.name = null
      this.armorClass = null
      this.initiative = null
      this.healthPoints = null
      this.tipo = 0
    },

    validate () {
      this.disableNext = !(this.players.findIndex(item => item.hp > 0) > -1)
    },

    rollDiceSimple () {
      let i = 0
      let animationTimer = setInterval(() => {
        this.initiative = Math.floor(Math.random() * 20 + 1)
        if (i === 13) {
          clearInterval(animationTimer) // Stop the loop
        } else {
          i++
        }
      }, 50)
    }
  }
}
</script>

<style>
#turn-tracker .theme--light.v-text-field--outline .v-input__slot {
  border: 1px solid #cccccc!important
}

.button--fixedBottom {
  margin-bottom: 40px !important;
  height: 52px
}

.buttons {
  font-size: 1.4em;
  border-radius: 50%;
  padding: 3px;
  font-weight: bolder
}

.buttons--remove {
  border: 1px solid #ff5252 ;
  color:  #ff5252!important
}

.buttons--add {
  border: 1px solid #4caf50 ;
  color:  #4caf50!important
}

#turn-tracker .v-text-field {
  padding-top: 0;
}

.item {
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 0.5;
}

.dead {
  border: 3px solid red;
  opacity: 0.35;
}

.selected {
  background-color: #e0f7e169;
  border: 2px solid #4caf50;
  opacity: 1;
}

.close_badge {
  width: 100%
}

.close_badge .v-badge__badge {
  right:-7px!important
}

.close_badge .v-badge__badge span i{
  vertical-align: middle
}

.round {
  border-radius: 50%;
  padding: 5px;
  margin-top: -5px !important;
  color: #ffffff !important;
  background-color: #ff5252
}
</style>

