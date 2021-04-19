import clone from '@/lib/clone';
import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
const localStorageKeyName = 'recordList'
const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as tag[],
  },
  mutations: {
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList?.push(record2);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName,
        JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },



  },
  actions: {
  },
  modules: {
  }
})
// store2.commit('increment', 13)



export default store;