<template>
  <div id="app">
    <div class="contain">
      <!-- <waterfall :imagelists="imagelists" :clos="6" /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

// import waterfall from '@/components/waterfall.vue'
export default {
  name: 'App',
  data () {
    return {
      imagelists: [
        [
          {
            url: require('../static/images/avatar.png')
          },
          {},
          {},
          {},
        ],
        [],
        [],
        [],
        [],
      ]
    }
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
