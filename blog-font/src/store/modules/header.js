
import * as types from '../mutation-types'
// 全局变量

const state = {
    scrollTop:'',
    selectTap:1, //默认选中首页
}

const getters = {

}


const actions = {
    // 获取当前时间状态
    async getSelectTap(context,id){
        context.commit('GETSELECTTAP',id);
    }
}

const mutations = {
    [types.GETSELECTTAP](state,id){
        state.selectTap=id;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}