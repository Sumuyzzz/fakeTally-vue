import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, n) {
      state.count += n
    }
  },
  actions: {
  },
  modules: {
  }
})
store.commit('increment', 19)
console.log(store.state.count)


export default store;