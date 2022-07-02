<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <RedFooter />
  </div>
</template>

<script>

import Header from '@/components/header.vue'
import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'App',
  components: { Header, RedFooter }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>
