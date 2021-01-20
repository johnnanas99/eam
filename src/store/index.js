import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      name: ""
    }
  },
  mutations: {
    changeusername(state,newname){
      state.user.name = newname;
      // HOWTO use it
      // this.$store.commit("changeusername","HA")
    }
  },
  actions: {
  },
  modules: {
  }
})
