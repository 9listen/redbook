import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from '@/router'
import store from '@/store'
// 引入图标
import './../static/font/iconfont.css'
// 引入虚拟数据
import './mock/mock.js'
// 引入UI组件库
import ElementUI from 'element-ui'
// 引入ui全部样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,//注册路由信息后，组件身上都拥有$route,$router属性
  store,
}).$mount('#app')
