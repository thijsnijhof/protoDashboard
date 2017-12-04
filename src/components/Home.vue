<template>
  <div class="container">
    <app-device></app-device>
    <app-device></app-device>
    <app-device></app-device>
    <app-device></app-device>
    <app-device></app-device>
    <app-device></app-device>
  </div>
</template>

<script>
  import Device from './listitems/Device.vue';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to the home page'
    }
  },
  components: {
    appDevice: Device
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
   align-items:flex-start;
   flex-wrap: wrap;
 }
</style>
