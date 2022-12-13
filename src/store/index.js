import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from "../http/http-common";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leaves: [],
    error: ''
  },
  mutations: {
    setLeaves: (state, leaves) => (
      state.leaves = leaves
    ),
    setError: (state, error) => (
      state.error = error
    ),
  },
  actions: {
    async fetchLeaves({commit}){
      const response = await HTTP.get("leaves/?email=taliha.arif@systemsltd.com");
      commit("setLeaves", response.data[0].leaves);
    },
    async applyLeave({commit}, dataBody){
      console.log('data', dataBody)
      await axios.post("http://localhost:5000/leaves/create", dataBody)
      .then(response => {
          console.log('status: ', response.status);
          this.$router.push('/leaves')
      })
      .catch(error => {
        commit("setError", error.response.data.message);
      });
    },
  },
  modules: {
  }
})
