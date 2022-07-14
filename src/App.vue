<template>
  <v-app>


    <v-toolbar color="light-blue darken-2" dark>
      <v-toolbar-side-icon>
        <v-btn icon id="back" style="margin-top:0; padding-top:0">
          <v-icon @click="$router.go(-1)">keyboard_arrow_left</v-icon>
        </v-btn>        
      </v-toolbar-side-icon>
      <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>
    </v-toolbar>


    <v-slide-y-transition hide-on-leave leave-absolute>
      <router-view></router-view>
    </v-slide-y-transition>


    <v-bottom-nav app color="grey lighten-4" :value="true">
      <v-btn v-for="item in navLinks" :key="item.id" :value="item.name" :to="item.target" :id="item.name">
        <v-icon color="light-blue darken-2" :class="item.icon" fab flat></v-icon>
      </v-btn>
    </v-bottom-nav>

  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      color: 'primary',
      slide: 'left',
      navLinks: [
        { name: 'itens', target: '/itens', icon: 'ico-chest' },
        { name: 'magias', target: '/spells', icon: 'ico-crystal' },
        { name: 'home', target: '/', icon: 'ico-castle' },
        { name: 'dice roller', target: '/dice-roller', icon: 'ico-dice' },
        { name: 'turn tracker', target: '/turn-tracker', icon: 'ico-death' }
      ]
    }
  }
}
</script>

<style>

.border {
  border: 1px solid red !important
}

.no-padding {
  padding: 0 !important
}

.v-bottom-nav .v-btn {
  min-width: 60px;
  padding: 14px 12px 10px;
  opacity: 1;
}

.v-btn--active:before,
.v-btn:focus:before,
.v-btn:hover:before {
  background-color: transparent;
}

.v-messages {
  display: none;
}

.v-card {
  border-radius: 5px;
}

.appear {
  backface-visibility: hidden;
  z-index: 1;
}

.appear-move {
  transition: all 600ms ease-in-out 50ms;
}

.appear-enter-active {
  transition: all 300ms ease-out;
}

.appear-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}

.appear-enter {
  transform: scale(0.9);
}

.v-expansion-panel__header {
  padding: 12px
}

.list-of-itens {
  border-radius: 5px
}

.details .flex {
  padding: 3px 8px !important;
}

.v-text-field__details {
  display: none!important
}
</style>
