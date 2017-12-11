import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
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
  plugins: [
    // persist the accessToken to localStorage
    // https://github.com/robinvdvleuten/vuex-persistedstate
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, {expires: 7 , secure:true}),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  mutations: {
    authUser(state, userData) {
      //store the accesToken in the store
      state.accessToken = userData.token
    }
  },
  getters: {
    // can be use to show data
    // fetch and show
  },
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
