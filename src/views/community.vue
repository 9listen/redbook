<template>
  <div>
    <Header />

    <RedFooter />
  </div>
</template>

<script>

import Header from '@/components/header.vue'
import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'aCommunity',
  components: { Header, RedFooter },

}
</script>

<style lang="less" scoped>
</style>