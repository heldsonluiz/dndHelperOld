<template>
  <v-content>
    <v-container fluid grid-list-lg fill-height>
      <v-layout row wrap justify-space-around fill-height>
        <v-flex xs12 sm6 md4 v-for="dice in dices" :key="dice" my-2>
          <dice :dice="dice"></dice>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Dice from './Dice'

export default {
  name: 'dice-roller',
  components: {
    Dice
  },
  data () {
    return {
      title: 'DiceRoller',
      dices: [4, 6, 8, 10, 12, 20, 100]
    }
  }
}
</script>
