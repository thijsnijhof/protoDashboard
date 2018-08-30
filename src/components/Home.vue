<template >
  <v-ons-page modifier="material" >
    <div class="background"></div>
        <app-device v-for="device in devices" :device="device" :key="device.id" class="list-style"></app-device>
  </v-ons-page>
</template>

<script>
  import Device from './listitems/Device.vue';

  export default {
    components: {
      appDevice: Device
    },
    computed: {
      devices() {
        return this.$store.getters.data;
      },
    },
    created:function() {
        this.$store.dispatch('fetchDevices')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    background: #555; /* For browsers that do not support gradients */
    background: -webkit-radial-gradient(#555, #222); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#555, #222); /* For Opera 11.1 to 12.0 */
    background: -moz-radial-gradient(#555, #222); /* For Firefox 3.6 to 15 */
    background: radial-gradient(#555, #222); /* Standard syntax */
  }

</style>
