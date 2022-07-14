import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import aboutme from './aboutme'
export default new Vuex.Store({
    modules: {
        //实现vuex仓库模块化开发存储数据
        namespaced: true,
        aboutme,
    }
})