import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from "../http/http-common";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leaves: [],
  },
  mutations: {
    setLeaves: (state, leaves) => (
      state.leaves = leaves
  ),
  },
  actions: {
    async fetchLeaves({commit}){
      const response = await HTTP.get("leaves/?email=taliha.arif@systemsltd.com");
      commit("setLeaves", response.data[0].leaves);
    },
  },
  modules: {
  }
})
