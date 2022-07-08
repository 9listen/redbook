import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 重写push和replace
// 引入组件
import Home from '@/views/home.vue'
import Community from '@/views/community.vue'
import News from '@/views/news.vue'
import AboutMe from '@/views/aboutme.vue'
export default new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/community',
            name: 'community',
            component: Community,
        },
        {
            path: '/news',
            name: 'news',
            component: News,
        },
        {
            path: '/aboutme',
            name: 'aboutme',
            component: AboutMe,
        }
    ]
})