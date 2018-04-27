<template>
  <!--<div class="container">-->
    <!--<app-device v-for="device in devices" :device="device" :key="device.id" class="list-style"></app-device>-->
  <!--</div>-->
  <v-ons-page modifier="material" >
    <app-device v-for="device in devices" :device="device" :key="device.id" class="list-style"></app-device>
  </v-ons-page>
</template>

<script>
  import Device from './listitems/Device.vue';
  import {mapGetters} from 'vuex';

  export default {
    components: {
      appDevice: Device
    },
    computed: {
//      ...mapGetters('navigator', [
//        'token',
//        'data',
//        'isLoggedIn'
//      ]),
      devices() {
//        console.log('getters data', this.$store.state);
//        console.log('getters data', this.$store.getters.accessToken);
        console.log('getters data', this.$store.getters.data);
//        console.log('getters data', this.$store.getters);
//        return this.$store.state.navigator.data;
        return this.$store.getters.data;
      },
    },
    created:function() {
//        this.$store.dispatch('navigator/fetchDevices')
        this.$store.dispatch('fetchDevices')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-right: 5%;
    margin-left: 5%;
  }

</style>
