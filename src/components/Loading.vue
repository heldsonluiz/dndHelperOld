<template>
  <v-fade-transition>
    <v-flex xs12 class="text-xs-center" py-5 my-5>
      <div class="py-5 my-5 primary--text heading">
        <img src='../../static/img/loading.png' class="rotate">
      </div>
    </v-flex>
  </v-fade-transition>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .rotate {
    height: 70px;
    opacity: .35;
    animation: example 5s linear infinite; 
  }

  @keyframes example {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
</style>
