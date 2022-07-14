<template>
  <v-flex xs12 sm6 md4>
    <v-card :id="spell.id">
      <v-card-title class="pb-0 Spell__class">
        <v-layout row wrap >
          <v-flex title :class="`${spell.school.style}--text`" @click="doFavorite(spell)">
            <v-icon color="amber" >
                {{ spell.favorite ? 'star':'star_border' }}
            </v-icon>
            {{ spell.name }}
            <span v-if="spell.ritual" class="black--text body-1"> (ritual)</span>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-text>
        <v-layout row wrap caption >
          <v-flex pt-0>
            ({{ spell.name_en }})
          </v-flex>
        </v-layout>

        <v-layout row wrap caption class="details">
          <v-flex xs6>
            <v-icon size="12" class="pr-1">ico-wizard</v-icon> Nível {{ spell.level }}
          </v-flex>
          <v-flex xs6>
            <v-avatar size="16" style="margin-left: -2px; margin-right:3px" pr-2>
              <img :src="`static/img/schools/${spell.school.style}.png`">
            </v-avatar>
            {{ spell.school.pt }}
          </v-flex>
          <v-flex xs6>
            <v-icon size="12" class="pr-1">ico-clock</v-icon> {{ spell.castingTime }}
          </v-flex>
          <v-flex xs6>
            <v-icon size="12" class="pr-1">ico-distance</v-icon> {{ spell.range }}          
          </v-flex>
          <v-flex xs6>
            <v-icon size="12" class="pr-1">ico-hourglass</v-icon> {{ spell.duration }}
          </v-flex>
          <v-flex xs6>
            <v-icon size="12" class="pr-1">ico-brain</v-icon> {{ spell.concentration ? 'Concentração' : '' }}
          </v-flex>
          <v-flex xs12>
            <v-icon size="12" class="pr-1">ico-component</v-icon> {{ spell.components }} {{ spell.material ? ` - ${spell.material}` : spell.material }}
          </v-flex>
        </v-layout>

        <v-layout row wrap pt-2>
          <v-flex xs12>
            <v-chip v-for="item in spell.classes" small :key='item.name' @click="doFilterClass(item)" outline color="primary">
              <span class="Spell__class">{{ `${item}` }}</span>
            </v-chip>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <div v-if="!shortDesc" v-html="this.peep"></div>
            <div v-else v-html="spell.description"></div>
          </v-flex>
        </v-layout>

      </v-card-text>

      <v-card-actions class="pb-3">
        <v-spacer></v-spacer>
          <v-btn outline round color="info" @click="shortDesc = !shortDesc">
            Descrição
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Spell',
  props: ['spell'],
  data () {
    return {
      shortDesc: false
    }
  },

  computed: {
    peep () {
      const text = this.spell.description.replace('<p>', '').replace('</p>', '. ')
      return `${text.slice(0, 210)}...`
    }
  },

  methods: {
    doFilterClass (value) {
      this.$emit('filterClass', value)
    },

    doFavorite (spell) {
      this.$emit('favorite', spell)
    }
  }
}
</script>

<style scoped>
  .Spell__class {
    cursor: pointer;
  }

  .Spell__details {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

