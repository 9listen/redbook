<template>
  <div>
    <Header :isCommunity="isCommunity" active="community" />
    <Water v-if="imglists.length > 0" :imgs="imglists" />
    <RedFooter />
  </div>
</template>

<script>

import Header from '@/components/header.vue'
import RedFooter from '@/components/redfooter.vue'
import Water from '@/components/water.vue'
import { reqGetWaterfall } from '@/apis/index.js'
export default {
  name: 'aCommunity',
  components: { Header, Water, RedFooter },
  data () {
    return { 
      isCommunity: true,
      imglists: [],

      // 原始测试数据，可以拿着去mock数据使得数据更真实
      //#region
      // imglists: [
      //   {
      //     cover: require('../../static/images/co4.png'),
      //     title: '生活特别有劲头',
      //     userinfo: {
      //       avatar: require('../../static/images/avatar.jpg'),
      //       username: '阳春白雪',
      //     },
      //   }]
      //#endregion
    }
  },
  mounted () {
    reqGetWaterfall().then(res => {
      if (res.status === 200) {
        this.imglists = res.data
        //axios默认有一层数据，拦截器里面处理了
        // {
        //   status: 200
        //   data: {
        //     status: 200,
        //       data: { }
        //   }
        // }
      }
    })
  }

}
</script>

<style lang="less" scoped>
</style>