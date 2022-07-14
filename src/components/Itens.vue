<template>
  <v-content>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 v-for="item in itens" :key="item.name" class="card">
          <v-card :to="item.disabled ? null : item.target" :disabled="item.disabled">
            <v-card-text class="text-xs-center">
              <v-icon :class="item.icon" :color="item.disabled ? 'grey lighten-1' : 'light-blue darken-2'" large></v-icon>
              <v-flex :class="item.disabled ? 'disabled' : ''">{{item.name}}</v-flex>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'itens',
  data () {
    return {
      title: 'Itens',
      itens: [
        { name: 'Armaduras', target: 'armaduras', icon: 'ico-armor', disabled: false },
        { name: 'Armas', target: 'armas', icon: 'ico-axes', disabled: false },
        { name: 'Pacotes', target: 'pacotes', icon: 'ico-backpack', disabled: false },
        { name: 'Diversos', target: 'diversos', icon: 'ico-axes', disabled: true },
        { name: 'Ferramentas', target: 'pacotes', icon: 'ico-hammer', disabled: true},
        { name: 'Transporte', target: 'pacotes', icon: 'ico-wheel', disabled: true},
        { name: 'Comércio', target: 'pacotes', icon: 'ico-exchange', disabled: true},
        { name: 'Despesas', target: 'pacotes', icon: 'ico-paper', disabled: true},
        { name: 'Bugigangas', target: 'pacotes', icon: 'ico-windmill', disabled: true}
      ]
    }
  }
}
</script>

<style scoped>
.bordered {
  border: 1px solid #cccccc;
}
.v-card__text  .disabled {
  color: #BDBDBD
}
</style>
