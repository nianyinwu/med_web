// store.js
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    // mutation to update currently authenticated user.
    setUser(state, user) {
      state.user = user;
    }
  }
});

export default store