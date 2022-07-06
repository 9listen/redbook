import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from '@/router'
// 引入图标
import './../static/font/iconfont.css'
// 
import './mock/mock.js'
// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,//注册路由信息后，组件身上都拥有$route,$router属性
}).$mount('#app')
