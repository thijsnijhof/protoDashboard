import Vue from 'vue';
import Vuex from 'vuex';
import Particle from 'particle-api-js';

Vue.use(Vuex);

const particle = new Particle();
var accesstoken;
// export const store to have access to it outside of this file
// we can access this in other files by using $store
export const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  getters: {
    // doubleExample: state => {
    //   return state.example * 2;
    // }
  },
  actions: {
    login() {
      particle.login({username: username, password: password})
        .then(function (data) {
            accesstoken = data.body.access_token;
          },
          function (err) {
            console.log('Error logging in!',err)
          }
        )
    }
  }
});
