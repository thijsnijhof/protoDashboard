<template>
  <v-ons-list modifier="material">
    <v-ons-list-header class="list-header-bg" :style="`${edited}`">
      {{singleDevice.name}}
      <v-ons-checkbox id="checkbox" v-model="onEdit" modifier="material" v-if="singleDevice.value !== ''"></v-ons-checkbox>
    </v-ons-list-header>

    <v-ons-list-item class="list-item-val-bg">{{singleDevice.value}}</v-ons-list-item>

    <transition name="insert">
      <v-ons-list-item class="list-item-bg" v-if="onEdit">

        <!--PRODUCTRANGE-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" min="0" max="9999" type="number" modifier="material" v-if="singleDevice.name === 'ProductRange'"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ProductRange'" modifier="outline">update</v-ons-button>
        </div>

        <!--PRODUCTID-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" type="number" min="0" max="9999" modifier="material" v-if="singleDevice.name === 'ProductId'"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ProductId'" modifier="outline">update</v-ons-button>
        </div>

        <!--USEVOLTSENSE-->
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value" v-if="singleDevice.name === 'useVoltSense'"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" v-if="singleDevice.name === 'useVoltSense'" modifier="outline">update</v-ons-button>
        </div>

        <!--<app-checkbox v-bind:singleDevice="singleDevice"-->
                      <!--v-if="singleDevice.name === 'useVoltSense'"-->
                      <!--:onEdit="onEdit"-->
                      <!--:edited="edited"-->
        <!--&gt;</app-checkbox>-->

        <!--HASROCKERSWITCH-->
        <div class="text-input-wrapper">
          <!--<v-ons-checkbox v-on:change="confirmBoolValue()" v-model="singleDevice.value"  v-bind:true-value="1" v-bind:false-value="0" v-if="singleDevice.name === 'hasRockerSwitch'"></v-ons-checkbox>-->
          <v-ons-switch v-model="singleDevice.value" v-if="singleDevice.name === 'hasRockerSwitch'"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" v-if="singleDevice.name === 'hasRockerSwitch'" modifier="outline">update</v-ons-button>
        </div>

        <!--HASPUSHBUTTON-->
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value" v-if="singleDevice.name === 'hasPushButton'"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" v-if="singleDevice.name === 'hasPushButton'" modifier="outline">update</v-ons-button>
        </div>

        <!--HASPIRSENSOR-->
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value" v-if="singleDevice.name === 'hasPIRSensor'"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" v-if="singleDevice.name === 'hasPIRSensor'" modifier="outline">update</v-ons-button>
        </div>

        <!--HASRTCBATTERY-->
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value" v-if="singleDevice.name === 'hasRTCBattery'"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" v-if="singleDevice.name === 'hasRTCBattery'" modifier="outline">update</v-ons-button>
        </div>

        <!--BUTTONPIN-->
        <!--TODO change to select range-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedButtonPin" v-if="singleDevice.name === 'buttonPin'" modifier="material underbar">
            <option v-for="buttonPin in buttonPins" :value="buttonPin.value">{{ buttonPin.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmButtonPin()" v-if="singleDevice.name === 'buttonPin'" modifier="outline">update</v-ons-button>
        </div>


        <!--FIRMWAREVERSION-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'FirmwareVersion'" type="number" step="1" min="0" max="9999"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'FirmwareVersion'" modifier="outline">update</v-ons-button>
        </div>

        <!--LocationLatitude-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'LocationLatitude'" type="number" step="1" min="-90" max="90"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'LocationLatitude'" modifier="outline">update</v-ons-button>
        </div>

        <!--LocationLongitude-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'LocationLongitude'" type="number" step="1" min="-180" max="180"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'LocationLongitude'" modifier="outline">update</v-ons-button>
        </div>

        <!--EFFECTXOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'EffectXOffset'" type="number" step="32" min="0" max="65535"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectXOffset'" modifier="outline">update</v-ons-button>
        </div>

        <!--EFFECTYOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'EffectYOffset'" type="number" step="32" min="0" max="65535"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectYOffset'" modifier="outline">update</v-ons-button>
        </div>

        <!--EFFECTTIMEOFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'EffectTimeOffset'" type="number" step="32" min="0" max="65535"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectTimeOffset'" modifier="outline">update</v-ons-button>
        </div>

        <!--MASTERID-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MasterId'" type="number" step="1" min="0" max="99"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MasterId'" modifier="outline">update</v-ons-button>
        </div>

        <!--MAINLOCATIONNAME-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editText" v-if="singleDevice.name ==='MainLocationName'" type="text" modifier="material"></v-ons-input>
          <v-ons-button v-on:click="confirmTextValue()" v-if="singleDevice.name === 'MainLocationName'" modifier="outline">update</v-ons-button>
        </div>

        <!--WIFIMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedWifiMode" v-if="singleDevice.name === 'WiFiMode'" modifier="material underbar">
            <option v-for="wifiMode in wifiModes" :value="wifiMode.value">{{ wifiMode.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmWifi()" v-if="singleDevice.name === 'WiFiMode'" modifier="outline">update</v-ons-button>
        </div>

        <!--APPMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAppMode" v-if="singleDevice.name === 'AppMode'" modifier="material underbar">
            <option v-for="appMode in appModes" :value="appMode.value">{{ appMode.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAppMode()" v-if="singleDevice.name === 'AppMode'" modifier="outline">update</v-ons-button>
        </div>

        <!--MASTERSLAVEMODE-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedMasterSlaveMode" v-if="singleDevice.name === 'MasterSlaveMode'" modifier="material underbar">
            <option v-for="masterSlaveMode in masterSlaveModes" :value="masterSlaveMode.value">{{ masterSlaveMode.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmMasterSlaveMode()" v-if="singleDevice.name === 'MasterSlaveMode'" modifier="outline" ripple>update</v-ons-button>
        </div>

        <!--USERSETS-->
        <!-- -------- -->
        <!--LOCATION NAME-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editText" v-if="singleDevice.name ==='LocationName'" type="text" modifier="material" max="24"></v-ons-input>
          <v-ons-button v-on:click="confirmTextValue()" v-if="singleDevice.name === 'LocationName'" modifier="outline">update</v-ons-button>
        </div>

        <!--PINCODE-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'PinCode'" type="number" step="1" min="0" max="9999"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'PinCode'" modifier="outline">update</v-ons-button>
        </div>

        <!--MANUAL OFFSET-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'ManualOffset'" type="number" step="1" min="-12" max="14"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ManualOffset'" modifier="outline">update</v-ons-button>
        </div>

        <!--Timer1-Wake-up-Hour-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer1-Wake-up-Hour'" type="number" step="1" min="0" max="23"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer1-Wake-up-Hour'" modifier="outline">update</v-ons-button>
        </div>

        <!--Timer1-Wake-up-Min-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer1-Wake-up-Min'" type="number" step="1" min="0" max="59"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer1-Wake-up-Min'" modifier="outline">update</v-ons-button>
        </div>

        <!--Timer1-Sleep-Hour-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer1-Sleep-Hour'" type="number" step="1" min="0" max="23"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer1-Sleep-Hour'" modifier="outline">update</v-ons-button>
        </div>

        <!--Timer1-Sleep-Minutes-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer1-Sleep-Minutes'" type="number" step="1" min="0" max="59"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer1-Sleep-Minutes'" modifier="outline">update</v-ons-button>
        </div>

        <!--TIMER2-->
        <!--Timer2-Wake-up-Hour-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer2-Wake-up-Hour'" type="number" step="1" min="0" max="23"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer2-Wake-up-Hour'" modifier="outline">update</v-ons-button>
        </div>
        <!--Timer2-Wake-up-Minutes-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer2-Wake-up-Minutes'" type="number" step="1" min="0" max="59"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer2-Wake-up-Minutes'" modifier="outline">update</v-ons-button>
        </div>
        <!--Timer2-Sleep-Hour-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer2-Sleep-Hour'" type="number" step="1" min="0" max="23"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer2-Sleep-Hour'" modifier="outline">update</v-ons-button>
        </div>
        <!--Timer2-Sleep-Minutes-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Timer2-Sleep-Minutes'" type="number" step="1" min="0" max="59"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Timer2-Sleep-Minutes'" modifier="outline">update</v-ons-button>
        </div>
        <!--RandomMode-Hue-Min-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'RandomMode-Hue-Min'" type="number" step="1" min="0" max="359"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'RandomMode-Hue-Min'" modifier="outline">update</v-ons-button>
        </div>
        <!--RandomMode-Hue-Max-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'RandomMode-Hue-Max'" type="number" step="1" min="0" max="359"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'RandomMode-Hue-Max'" modifier="outline">update</v-ons-button>
        </div>
        <!--Default-Hue-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Default-Hue'" type="number" step="1" min="0" max="359"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Default-Hue'" modifier="outline">update</v-ons-button>
        </div>
        <!--Default-Harmony-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'Default-Harmony'" type="number" step="1" min="0" max="5"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'Default-Harmony'" modifier="outline">update</v-ons-button>
        </div>
        <!--MasterBrightness-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MasterBrightness'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MasterBrightness'" modifier="outline">update</v-ons-button>
        </div>
        <!--ColorTemperature-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'ColorTemperature'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'ColorTemperature'" modifier="outline">update</v-ons-button>
        </div>
        <!--MaximumSaturation-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MaximumSaturation'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MaximumSaturation'" modifier="outline">update</v-ons-button>
        </div>
        <!--MinimumSaturation-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MinimumSaturation'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MinimumSaturation'" modifier="outline">update</v-ons-button>
        </div>
        <!--MaximumBrightness-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MaximumBrightness'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MaximumBrightness'" modifier="outline">update</v-ons-button>
        </div>
        <!--MinimumBrightness-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'MinimumBrightness'" type="number" step="1" min="0" max="255"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MinimumBrightness'" modifier="outline">update</v-ons-button>
        </div>
        <!--EffectSpeed-->
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" modifier="material" v-if="singleDevice.name === 'EffectSpeed'" type="number" step="32" min="0" max="32767"></v-ons-input>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'EffectSpeed'" modifier="outline">update</v-ons-button>
        </div>
        <!--TimeZone-->
        <!--Timer1-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedTimer" v-if="singleDevice.name === 'Timer1'" modifier="material underbar">
            <option v-for="time in timer" :value="time.value">{{ time.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmTimer()" v-if="singleDevice.name === 'Timer1'" modifier="outline" ripple>update</v-ons-button>
        </div>
        <!--Timer2-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedTimer" v-if="singleDevice.name === 'Timer2'" modifier="material underbar">
            <option v-for="time in timer" :value="time.value">{{ time.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmTimer()" v-if="singleDevice.name === 'Timer2'" modifier="outline" ripple>update</v-ons-button>
        </div>
        <!--Auto-Random-Timer-Every-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAutoRandomEvery" v-if="singleDevice.name === 'Auto-Random-Timer-Every'" modifier="material underbar">
            <option v-for="autoRandomEvery in autoRandomsEvery" :value="autoRandomEvery.value">{{ autoRandomEvery.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAutoRandomEvery()" v-if="singleDevice.name === 'Auto-Random-Timer-Every'" modifier="outline" ripple>update</v-ons-button>
        </div>
        <!--Auto-Random-After-Interation-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAutoRandom" v-if="singleDevice.name === 'Auto-Random-After-Interation'" modifier="material underbar">
            <option v-for="autoRandom in autoRandoms" :value="autoRandom.value">{{ autoRandom.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAutoRandom()" v-if="singleDevice.name === 'Auto-Random-After-Interation'" modifier="outline" ripple>update</v-ons-button>
        </div>
        <!--RandomMode-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedRandom" v-if="singleDevice.name === 'RandomMode'" modifier="material underbar">
            <option v-for="random in randoms" :value="random.value">{{ random.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmRandom()" v-if="singleDevice.name === 'RandomMode'" modifier="outline" ripple>update</v-ons-button>
        </div>
        <!--EffectMode-->
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedEffectMode" v-if="singleDevice.name === 'EffectMode'" modifier="material underbar">
            <option v-for="effect in effects" :value="effect.value">{{ effect.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmEffectMode()" v-if="singleDevice.name === 'EffectMode'" modifier="outline" ripple>update</v-ons-button>
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
        edited:'color:#777',
        editText: '',
        editNum: this.singleDevice.value,
        autoRandomText:'',
        wifiModes: [
          {text: 'Always On', value: 0},
          {text: 'Off when sleeping', value: 1},
          {text: 'Off after MiFi search', value: 2},
          {text: 'Off after WiFi Direct', value: 3}
        ],
        effects: [
          {text: 'Off', value: 0},
          {text: 'Default', value: 1},
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
        buttonPins: [
          {text: 'D0', value: 0},
          {text: 'D1', value: 1},
          {text: 'D2', value: 2},
          {text: 'D3', value: 3},
          {text: 'D4', value: 4},
          {text: 'D5', value: 5},
          {text: 'D6', value: 6},
          {text: 'D7', value: 7},
          {text: 'A0', value: 10},
          {text: 'A1', value: 11},
          {text: 'A2', value: 12},
          {text: 'A3', value: 13},
          {text: 'A4', value: 14},
          {text: 'A5', value: 15},
          {text: 'A6', value: 16},
          {text: 'A7', value: 17},
        ],
        timer:[
          {text: 'Off', value: 0},
          {text: 'Everyday', value: 1},
          {text: 'Weekdays Only', value: 2},
          {text: 'Weekends Only', value: 3},
        ],
        randoms:[
          {text: 'Hue and Harmony', value: 0},
          {text: 'Only Warm Hues', value: 1},
          {text: 'Only Cold Hues', value: 2},
          {text: 'Hue Range', value: 3},
          {text: 'Hue and Analogic Harmonies', value: 4},
        ],
        autoRandoms:[
          {text: 'At Wake-up', value: 0},
          {text: '1 Minute', value: 60},
          {text: '5 Minutes', value: 300},
          {text: '10 Minutes', value: 600},
          {text: '20 Minutes', value: 1200},
          {text: '30 Minutes', value: 1800},
          {text: '1 Hour', value: 3600},
          {text: '2 Hours', value: 7200},
          {text: '4 Hours', value: 14400},
        ],
        autoRandomsEvery:[
          {text: 'No Auto Random', value: 0},
          {text: '1 Minute', value: 60},
          {text: '5 Minutes', value: 300},
          {text: '10 Minutes', value: 600},
          {text: '20 Minutes', value: 1200},
          {text: '30 Minutes', value: 1800},
          {text: '1 Hour', value: 3600},
          {text: '2 Hours', value: 7200},
          {text: '4 Hours', value: 14400},
        ],
        selectedAutoRandom:this.singleDevice.value,
        selectedEffectMode:this.singleDevice.value,
        selectedAutoRandomEvery:this.singleDevice.value,
        selectedRandom:this.singleDevice.value,
        selectedTimer:this.singleDevice.value,
        selectedButtonPin:this.singleDevice.value,
        selectedAppMode: this.singleDevice.value,
        selectedWifiMode: this.singleDevice.value,
        selectedMasterSlaveMode: this.singleDevice.value
      }
    },
    components: {
      appInputSlider: InputSlider,
      appCheckbox: Checkbox
    },
    methods: {
      confirmAction(){
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.onEdit = false;
        this.edited='color:green';
      },
      confirmRandom(){
        this.singleDevice.value = this.selectedRandom;
        this.confirmAction();
      },
      confirmEffectMode(){
        this.singleDevice.value = this.selectedEffectMode;
        this.confirmAction();
      },
      confirmAutoRandom(){
        this.singleDevice.value = this.selectedAutoRandom;
        this.confirmAction();
      },
      confirmAutoRandomEvery(){
        this.singleDevice.value = this.selectedAutoRandomEvery;
        this.confirmAction();
      },
      confirmTimer(){
        this.singleDevice.value = this.selectedTimer;
        this.confirmAction();
      },
      confirmMasterSlaveMode() {
        this.singleDevice.value = this.selectedMasterSlaveMode;
        this.confirmAction();
      },
      confirmAppMode() {
        this.singleDevice.value = this.selectedAppMode;
        this.confirmAction();
      },
      confirmButtonPin() {
        this.singleDevice.value = this.selectedButtonPin;
        this.confirmAction();
      },
      confirmWifi() {
        this.singleDevice.value = this.selectedWifiMode;
        this.confirmAction();
      },
      confirmNumValue() {
        this.singleDevice.value = this.editNum;
        this.confirmAction();
      },
      confirmTextValue() {
        this.singleDevice.value = this.editText;
        this.confirmAction();
      },
      confirmBoolValue() {
//        Convert true or false to 1 or 0
        let bool = this.singleDevice.value ? '1' : '0';
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal, 'bool: ', bool);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: bool,
          key: changedVal.val.key});
        this.onEdit = false;
        this.edited='color:green'
      },
    },

  }
</script>

<style scoped>
  .list-item-bg {
    background: #fff;
  }

  .list-header-bg {
    background: #e4f8f1;
    padding: 10px;
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
