<template>
  <v-content>
    <v-layout align-content-start justify-center>
      <v-flex>
        <v-card flat>
          <v-subheader>
            <span class="title font-weight-thin">{{ title }}</span>
          </v-subheader>
        </v-card>
      </v-flex>
    </v-layout>
    <v-slide-y-transition hide-on-leave leave-absolute>
      <loading v-if="loading"></loading>
      <v-card v-else flat>
      </v-card>
    </v-slide-y-transition>
  </v-content>
</template>

<script>

export default {
  name: 'diversos',
  data () {
    return {
      title: 'Diversos',
      loading: true
    }
  }
}
</script>