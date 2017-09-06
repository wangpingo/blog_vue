import Vue from 'vue'
import Vuex from 'vuex'
import globl from './globl'
import header from './modules/header.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    globl,
    header,
  },
  strict: debug
})
