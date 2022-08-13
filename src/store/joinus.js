import { reqGetHot, reqGetUpdate, reqGetCon } from '@/apis'

const state = {
    hotlist: [],
    updatelist: [],
    conlist: [],
}
const actions = {
    // 1.热招职位
    async getHotlist ({ commit }) {
        let result = await reqGetHot()
        if (result.status == 200) {
            commit('GETHOTLIST', result.data)
        }
    },
    // 2.招聘动态
    async getUpdatelist ({ commit }) {
        let result = await reqGetUpdate()
        if (result.status == 200) {
            commit('GETUPDATELIST', result.data)
        }
    },
    // 3.公司相关、内容相关、协议条款
    async getConlist ({ commit }) {
        let result = await reqGetCon();
        if (result.status == 200) {
            commit('GETCONLIST', result.data)
        }
    },
}
const mutations = {
    GETHOTLIST (state, hotlist) {
        state.hotlist = hotlist
    },
    GETUPDATELIST (state, updatelist) {
        state.updatelist = updatelist
    },
    GETCONLIST (state, conlist) {
        state.conlist = conlist
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}