<template>
  <!--<section class="device-container" @click="selectDevice(device)">-->
    <!--<div class="device-top">-->
      <!--<div v-if="device.connected" class="active-icon"></div>-->
      <!--<div v-else class="inactive-icon"></div>-->
      <!--<h1 class="device-top-text">-->
       <!--{{device.name}}-->
      <!--</h1>-->
    <!--</div>-->
    <!--<div class="device-content">-->
        <!--<ul class="properties">-->
          <!--<li>last online - {{device.last_heard}}</li>-->
          <!--<li>ID: {{device.id}}</li>-->
          <!--<li>Status: {{device.status}}</li>-->
        <!--</ul>-->
    <!--</div>-->
  <!--</section>-->

  <v-ons-card modifier="material" @click="selectDevice(device)">
    <v-ons-list>
    <!--<div class="device-content">-->
      <v-ons-list>
        <v-ons-list-title modifier="material" class="device-header">
          <div v-if="device.connected" class="active-icon"></div>
          <div v-else class="inactive-icon"></div>
          {{device.name}}
        </v-ons-list-title>

        <v-ons-list-header>Last Online</v-ons-list-header>
        <v-ons-list-item>{{device.last_heard}}</v-ons-list-item>

        <v-ons-list-header>Device ID</v-ons-list-header>
        <v-ons-list-item>{{device.id}}</v-ons-list-item>

        <v-ons-list-header>Status</v-ons-list-header>
        <v-ons-list-item>Status: {{device.status}}</v-ons-list-item>
      </v-ons-list>
    <!--</div>-->
    </v-ons-list>

  </v-ons-card>
</template>

<script>
export default {
  props: ['device'],
  methods: {
    selectDevice(device){
      const selectedDeviceId = device.id;
      const selectedDeviceData = device;
      console.log('selectedDeviceId is: ',selectedDeviceId);
      console.log('selectedDeviceData is: ', selectedDeviceData);
//      this.$store.dispatch('navigator/selectedDevice', selectedDeviceId)
      this.$store.dispatch('selectedDevice', selectedDeviceId)
    }
  }
}
</script>

<style scoped>
  .device-header {
    display:flex;
    align-items:center;
  }
  .device-container {
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: flex-start;
    margin:5px;
    min-width:25%;
    flex: 1;
    border:2px solid deepskyblue;
    box-shadow: 2px 2px 2px #222;
    text-decoration:none;
  }

  .device-container:hover{
    border:2px solid royalblue;
    background: #d3f1ff;
    cursor:pointer;

  }
  .device-top {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: flex-start;
    border-bottom: 1px solid deepskyblue;
  }

  .device-content {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .device-top-text {
    font-weight:100;
    font-size:medium;
  }
  .properties {
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self:flex-start;
    list-style: none;
    font-weight:100;
    font-size:small;
  }

  .active-icon {
    height:15px;
    width:15px;
    background-color: limegreen;
    border-radius:50%;
    margin-right:5%;
  }

  .inactive-icon {
    height:15px;
    width:15px;
    background-color: #cd0c00;
    border-radius:50%;
    margin-right:5%;
  }
</style>
