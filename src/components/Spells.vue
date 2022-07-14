<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <spell-filter :filter="filter" @filter="doFilter" />
        <spell-list :filter="filter" @filterClass="doFilterClass" />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import SpellFilter from './spells/SpellFilter'
import SpellList from './spells/SpellList'

export default {
  name: 'spells',
  components: {
    SpellFilter,
    SpellList
  },
  data () {
    return {
      filter: {
        name: '',
        level: '',
        school: '',
        class: '',
        order: '',
        onlyFavorites: false
      },
      show: false
    }
  },
  methods: {
    doFilter (filter) {
      this.filter = filter
    },

    doFilterClass (classs) {
      this.filter.class = classs
    }
  }
}
</script>
