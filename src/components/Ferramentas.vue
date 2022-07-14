<template>
  <v-tabs color="grey lighten-4" grow show-arrows slider-color="orange accent-4" elevation-3>
    <v-tab v-for="(item, idx) in children" :key="idx" ripple>
      <v-icon>{{ item.icon }}</v-icon>
    </v-tab>
    <v-tab-item v-for="(item, idx) in children" :key="idx">
      <router-view :name="item.routeName"></router-view>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  name: 'tools',
  data () {
    return {
      title: 'Ferramentas',
      children: [
        { name: 'Turn Tracker', routeName: 'turn-tracker', icon: 'ico-death' }
      ]
    }
  }
}
</script>