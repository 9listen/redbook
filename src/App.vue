<template>
  <div id="app">
    <!-- <Header /> -->
    <!--这里 没有header组件的话，刚开始加载会出现加载不出来的情况 -->
    <router-view />
    <!-- <RedFooter /> -->
  </div>
</template>

<script>

// import waterfall from '@/components/waterfall.vue'
// import Header from '@/components/header.vue'
// import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'App',
  // components: { Header, },

}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
