import { reqGetWelfare, reqGetMission, reqGetTablist, reqGetEmails, reqGetLocal, reqGetChannels } from '@/apis'
const state = {
    welfareList: [],
    missionList: [],
    tablist: {},
    emailslist: [],
    locallist: [],
    channels: [],
};
const actions = {
    // 1.社区、企业、福利社数据
    async getWelfarelist ({ commit }) {
        let result = await reqGetWelfare();
        if (result.status == 200) {
            commit('GETWELFARELIST', result.data)
        }
    },
    // 2.使命、愿景、企业价值观数据
    async getMissionlist ({ commit }) {
        let result = await reqGetMission();
        if (result.status == 200) {
            commit('GETMISSIONLIST', result.data)
        }
    },
    //3.上海总部、北京、武汉
    async getTablist ({ commit }) {
        let result = await reqGetTablist();
        if (result.status == 200) {
            commit('GETTABLIST', result.data)
        }
    },
    // 4.合作邮箱
    async getEmailslist ({ commit }) {
        let result = await reqGetEmails();
        if (result.status == 200) {
            commit('GETEMAILSLIST', result.data)
        }
    },
    // 5.我们在这里
    async getLocallist ({ commit }) {
        let result = await reqGetLocal();
        if (result.status == 200) {
            commit('GETLOCALLIST', result.data)
        }
    },
    // 6.更多方式关注小红书
    async getChannels ({ commit }) {
        let result = await reqGetChannels()
        if (result.status == 200) {
            commit('GETCHANNELS', result.data)
        }
    }
}
const mutations = {
    GETWELFARELIST (state, welfareList) {
        state.welfareList = welfareList
    },
    GETMISSIONLIST (state, missionList) {
        state.missionList = missionList
    },
    GETTABLIST (state, tablist) {
        state.tablist = tablist
    },
    GETEMAILSLIST (state, emailslist) {
        state.emailslist = emailslist
    },
    GETLOCALLIST (state, locallist) {
        state.locallist = locallist
    },
    GETCHANNELS (state, channels) {
        state.channels = channels
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}