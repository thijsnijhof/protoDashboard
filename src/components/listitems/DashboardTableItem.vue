<template>

  <v-ons-list modifier="material">
    <v-ons-list-header class="list-header-bg">
      {{singleDevice.name}}

      <v-ons-checkbox id="checkbox" v-model="onEdit" modifier="material"
                      v-if="singleDevice.value !== ''"></v-ons-checkbox>

    </v-ons-list-header>

    <v-ons-list-item class="list-item-val-bg">{{singleDevice.value}}</v-ons-list-item>

    <transition name="insert">
      <v-ons-list-item class="list-item-bg" v-if="onEdit">

        <!--PRODUCTRANGE-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       min="0"
                       max="9999"
                       type="number"
                       modifier="material" v-if="singleDevice.name === 'ProductRange'"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ProductRange'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--PRODUCTID-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       type="number"
                       min="0"
                       max="9999"
                       modifier="material" v-if="singleDevice.name === 'ProductId'"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ProductId'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--USEVOLTSENSE-->
        <v-ons-switch v-on:change="editBoolValue()" v-model="singleDevice.value"
                      v-if="singleDevice.name === 'useVoltSense'"></v-ons-switch>
        <!--HASROCKERSWITCH-->
        <!--<v-ons-checkbox v-on:change="editBoolValue()" v-model="singleDevice.value"  v-bind:true-value="1" v-bind:false-value="0" v-if="singleDevice.name === 'hasRockerSwitch'"></v-ons-checkbox>-->
        <v-ons-switch v-on:change="editBoolValue()" v-model="singleDevice.value"
                      v-if="singleDevice.name === 'hasRockerSwitch'"></v-ons-switch>
        <!--HASPUSHBUTTON-->
        <v-ons-switch v-on:change="editBoolValue()" v-model="singleDevice.value"
                      v-if="singleDevice.name === 'hasPushButton'"></v-ons-switch>
        <!--HASPIRSENSOR-->
        <v-ons-switch v-on:change="editBoolValue()" v-model="singleDevice.value"
                      v-if="singleDevice.name === 'hasPIRSensor'"></v-ons-switch>
        <!--HASRTCBATTERY-->
        <v-ons-switch v-on:change="editBoolValue()" v-model="singleDevice.value"
                      v-if="singleDevice.name === 'hasRTCBattery'"></v-ons-switch>

        <!--BUTTONPIN-->
        <v-ons-range v-on:change="editValue()" v-model="singleDevice.value" min="0" max="17" style="width:100%;"
                     modifier="material" v-if="singleDevice.name === 'buttonPin'"></v-ons-range>

        <!--FIRMWAREVERSION-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'FirmwareVersion'"
                       type="number"
                       step="32"
                       min="0"
                       max="9999"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'FirmwareVersion'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--LocationLatitude-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'LocationLatitude'"
                       type="number"
                       step="32"
                       min="-90"
                       max="90"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'LocationLatitude'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--LocationLongitude-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'LocationLongitude'"
                       type="number"
                       step="32"
                       min="-180"
                       max="180"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'LocationLongitude'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--EFFECTXOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'EffectXOffset'"
                       type="number"
                       step="32"
                       min="0"
                       max="65535"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectXOffset'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--EFFECTYOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'EffectYOffset'"
                       type="number"
                       step="32"
                       min="0"
                       max="65535"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectYOffset'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--EFFECTTIMEOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'EffectTimeOffset'"
                       type="number"
                       step="32"
                       min="0"
                       max="65535"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectTimeOffset'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--MASTERID-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum"
                       modifier="material" v-if="singleDevice.name === 'MasterId'"
                       type="number"
                       step="1"
                       min="0"
                       max="99"
          ></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MasterId'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--MAINLOCATIONNAME-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editText" v-if="singleDevice.name ==='MainLocationName'" type="text"
                       modifier="material"></v-ons-input>
          <v-ons-button v-on:click="confirmTextValue()" v-if="singleDevice.name === 'MainLocationName'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--WIFIMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedWifiMode" v-if="singleDevice.name === 'WiFiMode'" modifier="material underbar">
            <option v-for="wifiMode in wifiModes" :value="wifiMode.value">
              {{ wifiMode.text }}
            </option>
          </v-ons-select>

          <v-ons-button v-on:click="confirmWifi()" v-if="singleDevice.name === 'WiFiMode'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--APPMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAppMode" v-if="singleDevice.name === 'AppMode'" modifier="material underbar">
            <option v-for="appMode in appModes" :value="appMode.value">
              {{ appMode.text }}
            </option>
          </v-ons-select>

          <v-ons-button v-on:click="confirmAppMode()" v-if="singleDevice.name === 'AppMode'"
                        modifier="outline">update
          </v-ons-button>
        </div>

        <!--MASTERSLAVEMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedMasterSlaveMode" v-if="singleDevice.name === 'MasterSlaveMode'"
                        modifier="material underbar">
            <option v-for="masterSlaveMode in masterSlaveModes" :value="masterSlaveMode.value">
              {{ masterSlaveMode.text }}
            </option>
          </v-ons-select>

          <v-ons-button v-on:click="confirmMasterSlaveMode()" v-if="singleDevice.name === 'MasterSlaveMode'"
                        modifier="outline">update
          </v-ons-button>
        </div>


      </v-ons-list-item>
    </transition>
  </v-ons-list>
</template>

<script>
  import InputSlider from './InputISlider.vue';
  import Checkbox from './Checkbox.vue';

  export default {
    props: ['singleDevice'],
    data() {
      return {
        onEdit: false,
//        initialVal:this.singleDevice,
        editText: '',
        editNum: this.singleDevice.value,
        wifiModes: [
          {text: 'Always On', value: 0},
          {text: 'Off when sleeping', value: 1},
          {text: 'Off after MiFi search', value: 2},
          {text: 'Off after WiFi Direct', value: 3}
        ],
        appModes: [
          {text: 'Open', value: 0},
          {text: 'Closed', value: 1},
          {text: 'Open Color', value: 2},
          {text: 'Open Color and Brightness', value: 3}
        ],
        masterSlaveModes: [
          {text: 'Test', value: 0},
          {text: 'Burn In', value: 1},
          {text: 'Standalone', value: 2},
          {text: 'Master', value: 3},
          {text: 'Slave-Sync-Color', value: 4},
          {text: 'Slave-Sync-Complete', value: 5},
          {text: 'Slave-Sync-Pattern', value: 6},
        ],
        selectedAppMode: this.singleDevice.value,
        selectedWifiMode: this.singleDevice.value,
        selectedMasterSlaveMode: this.singleDevice.value
      }
    },
    created() {
//      console.log(this.singleDevice);
    },
    components: {
      appInputSlider: InputSlider,
      appCheckbox: Checkbox
    },
    methods: {
      confirmMasterSlaveMode() {
        this.singleDevice.value = this.selectedMasterSlaveMode;
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.singleDevice.value = changedVal.val.value;
      },
      confirmAppMode() {
        this.singleDevice.value = this.selectedAppMode;
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.singleDevice.value = changedVal.val.value;
      },
      confirmWifi() {
        this.singleDevice.value = this.selectedWifiMode;
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.selectedWifiMode = changedVal.val.value;
      },
      confirmNumValue() {
        this.singleDevice.value = this.editNum;
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.editNum = changedVal.val.value;
      },
      confirmTextValue() {
        this.singleDevice.value = this.editText;
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.editText = ''

      },
      editBoolValue() {
        let bool = this.singleDevice.value ? '0' : '1';
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal, 'bool: ', bool);
        this.$store.dispatch('editSetting', {name: changedVal.val.name, value: bool, key: changedVal.val.key})

      },
      editValue() {
        let changedVal = {val: this.singleDevice};
        console.log(changedVal.val.name);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        })
      }
    }

  }
</script>

<style scoped>
  .list-item-bg {
    background: #fff;
    /*border-top:1px solid #bdbdbd;*/
  }

  .list-header-bg {
    background: #e4f8f1;
    padding: 10px;
    /*border-top:1px solid #bdbdbd;*/
    display: flex;
    justify-content: space-between;
  }

  .list-item-val-bg {
    background: #f7f7f7;
  }

  .text-input-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    background-color: #fff;
  }

  .edit {
    display: flex;
    align-items: center;
  }

  .insert {
    background-color: #999;
  }

  .insert-enter-active {
    animation: insert-in .5s;
  }

  .insert-leave-active {
    animation: insert-in .5s reverse;
  }

  @keyframes insert-in {
    0% {
      height: 0;
      width: 0;
      opacity: 0;
    }
    25% {
      height: auto;
      width: 20%;
      opacity: 0.3;
    }
    50% {
      height: auto;
      width: 50%;
      opacity: 0.6;
    }
    75% {
      height: auto;
      width: 90%;
      opacity: 1;
    }
    100% {
      height: auto;
      width: 100%;
    }
  }
</style>
