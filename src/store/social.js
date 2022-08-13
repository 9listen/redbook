// 
import { reqGetSearch } from '@/apis'
const state = {
    searchlist: {},
}
const actions = {
    async getSearchlist ({ commit }, params = {}) {
        let result = await reqGetSearch(params)//调取服务器数据的时候至少传递一个参数
        // eslint-disable-next-line no-debugger
        debugger
        if (result.status == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
const mutations = {
    GETSEARCHLIST (state, searchlist) {//807 searchlist是Actions传的数据result.data
        state.searchlist = searchlist
    }
}
const getters = {//简化searchlist里面的dutylist数据
    dutylist (state) {
        return state.searchlist.dutylist || []
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}