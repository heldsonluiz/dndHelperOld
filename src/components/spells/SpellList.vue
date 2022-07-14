<template>
  <v-flex id="spells__list">
    <v-slide-y-transition hide-on-leave leave-absolute>
      <v-flex xs12 v-if="noResults" class="text-xs-center primary--text heading">
        Nenhuma magia encontrada
      </v-flex>
    </v-slide-y-transition>

    <v-slide-y-transition hide-on-leave leave-absolute>
      <loading v-if="loadingSpells"></loading>
    </v-slide-y-transition>

    <transition-group name="appear" tag="div" class="layout row wrap" v-if="!loadingSpells">
      <spell v-for="item in computedSpells" :key="item.id" @filterClass="doFilterClass" @favorite="doFavorite"
        :spell="item" class="appear">
      </spell>
    </transition-group>

    <v-flex pt-3 class="text-xs-center" v-if="!loadingSpells">
      <v-pagination v-show="this.numOfPages >= 1" circle v-model="pagination.currentPage" :length="this.numOfPages"
        :total-visible="6">
      </v-pagination>
    </v-flex>
  </v-flex>
</template>

<script>
import Spell from './Spell'

export default {
  name: 'SpellList',
  props: ['filter'],
  components: {
    Spell
  },
  data () {
    return {
      pagination: {
        currentPage: 1,
        perPage: 12
      },
      spells: [],
      favoriteSpells: [],
      loadingSpells: false
    }
  },

  watch: {
    'pagination.currentPage' () {
      this.loadingSpells = true
      setTimeout(() => {
        this.$vuetify.goTo(0, {
          duration: 500,
          easing: 'easeInOutCubic'
        })
        this.loadingSpells = false
      }, 500)
    }
  },

  methods: {
    orderList (list, order) {
      switch (order) {
        case 'lasc':
          return list.sort((a, b) => a.level.localeCompare(b.level))
        case 'ldesc':
          return list.sort((a, b) => b.level.localeCompare(a.level))
        case 'ndesc':
          return list.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        default:
          return list.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      }
    },

    isEmpty (value) {
      return !value || value === ''
    },

    doFilterClass (value) {
      this.filter.class = value
      this.$emit('filterClass', value)
    },

    doFavorite (spell) {
      const pos = this.spells.findIndex(e => e.id === spell.id)
      this.spells[pos].favorite = !this.spells[pos].favorite
      localStorage.setItem('spellList', JSON.stringify(this.spells))
    },

    setPage (n) {
      this.pagination.currentPage = n
    },

    getSpells () {
      this.loadingSpells = true
      setTimeout(() => {
        let spells = localStorage.getItem('spellList') || ''
        if (spells) {
          this.spells = JSON.parse(localStorage.getItem('spellList'))
          this.loadingSpells = false
        }
      }, 500)
    }
  },

  mounted () {
    this.getSpells()
    this.favoriteSpells = JSON.parse(localStorage.getItem('favoriteSpells')) || []
  },

  computed: {
    noResults () {
      return this.numOfPages < 1 && !this.loadingSpells
    },

    filteredList () {
      this.setPage(1)
      let list = this.filter.onlyFavorites ? this.spells.filter(item => item.favorite) : this.spells

      if (!this.isEmpty(this.filter.name)) {
        list = this.spells.filter(item =>
          item.name.toLowerCase().includes(this.filter.name.toLowerCase()) ||
          item.name_en.toLowerCase().includes(this.filter.name.toLowerCase()))
      }

      if (!this.isEmpty(this.filter.class)) {
        list = list.filter(item =>
          item.classes.find(i => i.toLowerCase() === this.filter.class.toLowerCase())
        )
      }

      if (!this.isEmpty(this.filter.level)) {
        list = list.filter(item =>
          item.level === this.filter.level
        )
      }

      if (!this.isEmpty(this.filter.school)) {
        list = list.filter(item =>
          item.school.pt.toLowerCase() === this.filter.school.toLowerCase()
        )
      }

      return this.orderList(list, this.filter.order)
    },

    offset () {
      return ((this.pagination.currentPage - 1) * this.pagination.perPage)
    },

    limit () {
      return (this.offset + this.pagination.perPage)
    },

    numOfPages () {
      return Math.ceil(this.filteredList.length / this.pagination.perPage)
    },

    computedSpells () {
      let list = this.filteredList
      if (this.offset > list.length) {
        this.setPage(this.numOfPages)
      }
      return list.slice(this.offset, this.limit)
    }
  }
}
</script>