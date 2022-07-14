<template>
  <v-content>
    <v-container fluid grid-list-lg fill-height>
      <v-layout row wrap align-center justify-space-around fill-height>

        <v-flex xs6 sm4 md3 v-for="item in itens" :key="item.name">
          <v-card :to="item.target">
            <v-card-text class="text-xs-center">
              <v-icon :class="item.icon" color="light-blue darken-2" large></v-icon>
              <v-flex>{{item.name}}</v-flex>
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
        { name: 'Armaduras', target: 'armaduras', icon: 'ico-armor' },
        { name: 'Armas', target: 'armas', icon: 'ico-axes' },
        { name: 'Diversos', target: 'diversos', icon: 'ico-axes' },
        { name: 'Pacotes', target: 'pacotes', icon: 'ico-backpack' }/* ,
        { name: 'Ferramentas', target: 'pacotes', icon: 'ico-hammer' },
        { name: 'Transporte', target: 'pacotes', icon: 'ico-wheel' },
        { name: 'Comércio', target: 'pacotes', icon: 'ico-exchange' },
        { name: 'Despesas', target: 'pacotes', icon: 'ico-paper' },
        { name: 'Bugigangas', target: 'pacotes', icon: 'ico-windmill' } */
      ]
    }
  }
}
</script>

<style scoped>
.bordered {
  border: 1px solid #cccccc;
}
</style>
