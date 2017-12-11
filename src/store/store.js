import Vue from 'vue';
import Vuex from 'vuex';
// import Particle from 'particle-api-js';
import router from '../router';

Vue.use(Vuex);

// export const store to have access to it outside of this file
// we can access this in other files by using $store
export const store = new Vuex.Store({
  state: {
    // initial state
    isLoggedIn: false,
    accessToken: null
  },
  mutations: {
    authUser(state, userData) {
      //store the accesToken in the store
      state.accessToken = userData.token
    }
  },
  getters: {},
  actions: {
    // authData = payload
    // commit, commits the context to the mutation, changing the state
    login({commit}, authData) {
      const particle = new Particle();
      particle.login({
        username: authData.username,
        password: authData.password
      })
      // commit the authUser mutation
        .then(res => {
          commit('authUser', {
            token: res.body.access_token
          });
          router.push('/home')
        })
        // catch errors
        .catch(error => console.log('failed to login', error))
    }
  }
});
