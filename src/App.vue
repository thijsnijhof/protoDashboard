<template>
  <div id="app">
    <app-header v-show="isLoggedIn"></app-header>
    <router-view class="main-margin"/>
    <app-footer class="sticky"></app-footer>
  </div>
</template>

<script>
  import Header from './components/static/Header.vue';
  import Footer from './components/static/Footer.vue';
  import {mapState} from 'vuex';
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    computed: mapState([
      'isLoggedIn',
    ]),
  }
</script>

<style scoped>
  .main-margin {
    margin-top:56px;
  }
  #app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #555;
    height: 100vh;
    justify-content: space-between;
    background: #555; /* For browsers that do not support gradients */
    background: -webkit-radial-gradient(#555, #222); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#555, #222); /* For Opera 11.1 to 12.0 */
    background: -moz-radial-gradient(#555, #222); /* For Firefox 3.6 to 15 */
    background: radial-gradient(#555, #222); /* Standard syntax */
  }
  .sticky {
    flex: 1 0 auto;
    justify-self: flex-end;
  }
</style>
