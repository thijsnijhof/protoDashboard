<template>
  <v-ons-page modifier="material">
    <!--<div class="background"></div>-->

    <!--<section class="dashboard-container">-->
      <!--<div class="dashboard-header">-->
        <!--<section class="devices-list">-->
          <!--<label for="devices"><i class="fa fa-list icon" aria-hidden="true"></i></label>-->
          <!--<select name="devices" id="devices">-->
            <!--<option value="device_names">MAKE_DYNAMIC</option>-->
            <!--<option value="device_names">MAKE_DYNAMIC</option>-->
          <!--</select>-->
        <!--</section>-->
        <!--<button class="bulk-edit">BULK EDIT</button>-->
        <!--<section class="collapse-container">-->
          <!--<p class="collapse-all">COLLAPSE ALL</p>-->
          <!--<i class="fa fa-angle-double-down icon" aria-hidden="true"></i>-->
        <!--</section>-->
      <!--</div>-->

      <!--<table class="dashboard-block">-->
        <!--<tr class="table-head">-->
          <!--<th>SettingName</th>-->
          <!--<th>Value</th>-->
          <!--<th>Edit</th>-->
        <!--</tr>-->
        <!--<app-table-item v-for="(singleDevice, key) in singleDevice" :singleDevice="singleDevice" :singleDeviceKey="key"-->
                        <!--:key="singleDevice.id"></app-table-item>-->
      <!--</table>-->

    <!--</section>-->
    <v-ons-list modifier="material" infinite-scroll>
      <v-ons-list-title class="dashboard-header">
        <div class="left">
          <label for="devices"><i class="fa fa-list icon" aria-hidden="true"></i></label>
          <!--<select name="devices" id="devices">-->
            <!--<option value="device_names">MAKE_DYNAMIC</option>-->
            <!--<option value="device_names">MAKE_DYNAMIC</option>-->
          <!--</select>-->
        </div>

        <div class="right">
          <v-ons-button  class="bulk-edit" modifier="material">BULK EDIT</v-ons-button>

        </div>

        <!--<div class="right">-->
          <!--<p class="collapse-all">COLLAPSE ALL</p>-->
          <!--<i class="fa fa-angle-double-down icon" aria-hidden="true"></i>-->
        <!--</div>-->

      </v-ons-list-title>

      <v-ons-list modifier="material">
        <v-ons-list-header class="table-head">
          <div class="left">
            SettingName
          </div>
          <!--<div class="centre">-->
            <!--Value-->
          <!--</div>-->
          <div class="right">
            Edit
          </div>

        </v-ons-list-header>
        <app-table-item v-for="(singleDevice, key) in singleDevice" :singleDevice="singleDevice" :singleDeviceKey="key"
                        :key="singleDevice.id"></app-table-item>
      </v-ons-list>

    </v-ons-list>
  </v-ons-page>

</template>

<script>
  import DashboardTableItem from './listitems/DashboardTableItem.vue';

  export default {
    computed: {
      singleDevice() {
        console.log('getters singleDeviceData', this.$store.getters.singleDeviceData);
        return this.$store.getters.singleDeviceData;
      }
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

  .dashboard-header {
    display: flex;
    background-color: deepskyblue;
    align-items: center;
    justify-content: space-between;
    padding:10px;
  }

  .icon {
    margin-left: 10px;
    margin-right: 5px;
    color: #fff;
    font-size:20px;
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
