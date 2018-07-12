<template>
  <v-ons-page modifier="material">

    <v-ons-list modifier="material" infinite-scroll>
      <v-ons-list-title class="dashboard-header">
        <div class="left">
          <!--<v-ons-button modifier="quiet" for="devices"><i class="fa fa-list icon" aria-hidden="true"></i></v-ons-button>-->
          <v-ons-select v-on:change="selectDevice()" v-model="selectedItem" modifier="material underbar" style="background-color: white">
            <option class="select-bar" v-for="device in devices" :device="device" :key="device.id" :value="device.id">
              {{ device.name }}
            </option>
          </v-ons-select>
        </div>

        <div class="right">
          <v-ons-select v-on:change="selectSet()" v-model="selectedSet" modifier="material underbar" style="background-color: white" selected>
            <option class="select-bar" :value="'MSTRSet'">Master</option>
            <option class="select-bar" :value="'USRSet'">User</option>
          </v-ons-select>
        </div>

      </v-ons-list-title>

      <v-ons-list modifier="material">
        <v-ons-list-header class="table-head">
          <div class="left">
            SettingName
          </div>

          <div class="right">
            Edit
          </div>

        </v-ons-list-header>
        <app-table-item v-for="(singleDevice,key, index) in singleDevice"
                        :singleDevice="singleDevice"
                        v-bind:key="key"
        ></app-table-item>

      </v-ons-list>

    </v-ons-list>
  </v-ons-page>

</template>

<script>
  import DashboardTableItem from './listitems/DashboardTableItem.vue';

  export default {
    props:['device'],
    data(){
      return {
          selectedItem:'',
          selectedSet:'Master'
      }
    },
    computed: {
      singleDevice() {
        return this.$store.getters.singleDeviceData;
      },
      devices() {
        return this.$store.getters.data;
      },
    },
    methods: {
      selectDevice(){
        const selectedDeviceId = this.selectedItem;
        this.$store.dispatch('selectedDevice', selectedDeviceId)
      },
      selectSet(){
        const selectedSet = this.selectedSet;
        console.log(selectedSet);
        const selectedDeviceId = this.selectedItem;
        this.$store.dispatch('selectSet',selectedSet);
        this.$store.dispatch('selectedDevice', selectedDeviceId);
      }
    },
    created() {
      const selectedDeviceId = this.$store.getters.singleDevice;
      this.selectedItem = this.$store.getters.singleDevice;
      this.$store.dispatch('selectedDevice', selectedDeviceId)
    },
    components: {
      appTableItem: DashboardTableItem
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

  #devices {
    background-color: #fff;
    border: none;
    font-weight: 100;
    color: #999;
  }

  .dashboard-container {
    display: flex;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    margin-right: 5%;
    margin-left: 5%;
    flex-wrap: wrap;
  }

  .dashboard-block {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: transparent;
  }

  .select-bar {
    background-color:#fff;
    padding:2px;
    font-weight:bold;
    font-size:small;
    color:#777;
  }
  .dashboard-header {
    display: flex;
    background-color: deepskyblue;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .icon {
    margin-left: 10px;
    margin-right: 5px;
    color: #fff;
    font-size: 20px;
  }

  .bulk-edit {
    color: #fff;
    background: deepskyblue;
    border: 3px solid #fff;
    align-self: center;
    flex-wrap: wrap;
  }

  .collapse-container {
    display: flex;
    align-items: center;
    justify-self: flex-end;
  }

  .collapse-all {
    color: #fff;
    font-size: small;
  }

  .table-head {
    display: flex;
    justify-content: space-between;
    background-color: #777;
    height: 7%;
    align-items: center;
    padding: 0 10px 0 10px;
  }

</style>
