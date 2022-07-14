<template>
  <v-card class="dice__card xs6">
    <v-card-text class="text-xs-center">
      <v-layout row wrap align-center>
        <v-flex xs2 py-0>
          <img :src="require('../../assets/d' + this.dice + '.png')" class="dice">
        </v-flex>
        <v-flex xs1>
          <v-layout row wrap justify-space-between>
            <v-flex xs12 pa-0>
              <v-icon @click="removeDice()" class="buttons buttons--remove">remove</v-icon>
            </v-flex>
            <v-flex xs12 px-0 py-1>
              x {{qtdeDice}}
            </v-flex>
            <v-flex xs12 pa-0>
              <v-icon @click="addDice()" class="buttons buttons--add">add</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs7 py-0 text-xs-center>
          <div :class="rolled === 0 ? 'grey--text text--lighten-1' : 'light-blue--text text--darken-2'" class="title">
            {{rolled}}
          </div>
          <div class="caption" v-if="this.qtdeDice > 1 && !calculando">
            {{sum}}
          </div>
        </v-flex>
        <v-flex xs2 pa-0 @click="rollDiceSimple()">
          <v-btn fab small outline color="primary">
            <v-icon>autorenew</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'dicev2',
  props: ['dice'],
  data () {
    return {
      calculando: false,
      qtdeDice: 1,
      rolled: 0,
      sum: ''
    }
  },

  methods: {
    rollDiceSimple () {
      this.sum = ''
      this.calculando = true
      let i = 0

      let acc = this.getRandomInt(this.dice)
      let dicesRolled = acc.toString()

      for (let count = 1; count < this.qtdeDice; count++) {
        let dice = this.getRandomInt(this.dice)
        dicesRolled = dicesRolled.concat(' + ' + dice.toString())
        acc += dice
      }

      let animationTimer = setInterval(() => {
        this.rolled = this.getRandomInt(this.dice)
        this.sum = this.rolled

        if (i === 23) {
          this.rolled = acc
          this.sum = dicesRolled
          this.calculando = false
          clearInterval(animationTimer)
        } else {
          i++
        }
      }, 50)
    },

    getRandomInt (max) {
      let random = Math.floor((Math.random() * parseInt(max, 10)) + 1)
      return random
    },

    removeDice () {
      if (this.qtdeDice > 1) {
        this.qtdeDice -= 1
      }
    },

    addDice () {
      this.qtdeDice += 1
    }
  }
}
</script>

<style>
.dice {
  vertical-align: middle;
  width: 100%;
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
</style>
