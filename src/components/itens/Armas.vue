<template>
  <v-tabs color="grey lighten-4" fixed-tabs slider-color="orange accent-4" >
    <v-tab v-for="item in children" :key="item.name" ripple>
      <v-icon>{{ item.icon }}</v-icon>
    </v-tab>
    <v-tab-item v-for="(item, idx) in children" :key="idx">
      <lista-armas :tipo="item.tipo" :title="item.title"></lista-armas>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ListaArmas from '@/components/itens/armas/ListaArmas'
export default {
  name: 'armas',
  components: {
    ListaArmas
  },
  data () {
    return {
      title: 'Armas',
      children: [
        { title: 'Corpo-a-corpo', tipo: 'meele', icon: 'ico-meele' },
        { title: 'Distância', tipo: 'ranged', icon: 'ico-ranged' }
      ]
    }
  }
}
</script>
