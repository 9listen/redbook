import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 重写push和replace
// 引入组件
import Home from '@/views/home.vue'
export default new VueRouter({
    routes: [
        {
            path: './home',
            name:'home',
            component: Home,
        }
    ]
})