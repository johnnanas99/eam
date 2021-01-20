import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      firstName: null,
      lastName: null,
      person_id: null,
      email: null,
      phone: null
    }
  },
  mutations: {
    getuser(state,newuser){
      state.user = newuser;
      // HOWTO use it
      // this.$store.commit("changeusername","HA")
    }
  },
  actions: {
  },
  modules: {
  }
})
