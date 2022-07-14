<template>
  <v-tabs color="grey lighten-4" fixed-tabs slider-color="orange accent-4" >
    <v-tab v-for="item in children" :key="item.name" ripple>
      <v-icon>{{ item.icon }}</v-icon>
    </v-tab>
    <v-tab-item v-for="(item, idx) in children" :key="idx">
      <lista-armaduras :type="item.type" :title="item.title" :defense="item.defense"></lista-armaduras>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ListaArmaduras from '@/components/itens/armaduras/ListaArmaduras'
export default {
  name: 'armaduras',
  components: {
    ListaArmaduras
  },
  data () {
    return {
      title: 'Armaduras',
      children: [
        { title: 'Leves', type: 'armor', defense: 'light', icon: 'ico-helmet-light' },
        { title: 'Médias', type: 'armor', defense: 'medium', icon: 'ico-helmet-medium' },
        { title: 'Pesadas', type: 'armor', defense: 'heavy', icon: 'ico-helmet-heavy' },
        { title: 'Escudos', type: 'shield', icon: 'ico-shield' }
      ]
    }
  }
}
</script>
