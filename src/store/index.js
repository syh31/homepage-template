import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// 状态对象
const state = {
  routePath: '/home'
}

// 包含多个更新state函数的对象
const mutations = {
  SET_PATH: (state, path) => {
    state.routePath = path
  }
}

// 包含多个对应事件回调函数的对象
const actions = {
  setRoutePath ({commit}) {
    commit('SET_PATH')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
