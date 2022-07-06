<template>
  <div id="app">
    <div class="contain">
      <Header />
      <router-view></router-view>
      <!-- <RedFooter /> -->
    </div>
  </div>
</template>

<script>

// import waterfall from '@/components/waterfall.vue'

import Header from '@/components/header.vue'
// import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'App',
  components: { Header, },

}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
