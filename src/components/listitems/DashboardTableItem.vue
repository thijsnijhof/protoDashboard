<template>
  <v-ons-list modifier="material">
    <v-ons-list-header class="list-header-bg" :style="`${edited}`">
      {{singleDevice.name}}
      <!--<v-ons-checkbox id="checkbox" modifier="material" v-if="singleDevice.value !== ''"></v-ons-checkbox>-->
    </v-ons-list-header>

    <!--<v-ons-list-item class="list-item-val-bg">{{singleDevice.value}}</v-ons-list-item>-->

    <!--<transition name="insert">-->
    <!--<v-ons-list-item class="list-item-bg" v-if="onEdit">-->

    <!--PRODUCTRANGE-->
    <template v-if="singleDevice.name === 'ProductRange'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" min="0" max="9999" type="number" :class="{invalid:$v.editNum.$invalid}" modifier="material"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--PRODUCTID-->
    <template v-if="singleDevice.name === 'ProductId'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" type="number" min="0" max="9999" modifier="material"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--USEVOLTSENSE-->
    <template v-if="singleDevice.name === 'useVoltSense'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>


    <!--HASROCKERSWITCH-->
    <template v-if="singleDevice.name === 'hasRockerSwitch'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--HASPUSHBUTTON-->
    <template v-if="singleDevice.name === 'hasPushButton'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--HASPIRSENSOR-->
    <template v-if="singleDevice.name === 'hasPIRSensor'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--HASRTCBATTERY-->
    <template v-if="singleDevice.name === 'hasRTCBattery'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-switch v-model="singleDevice.value"></v-ons-switch>
          <v-ons-button v-on:click="confirmBoolValue()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--BUTTONPIN-->
    <template v-if="singleDevice.name === 'buttonPin'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedButtonPin" modifier="material underbar">
            <option v-for="buttonPin in buttonPins" :value="buttonPin.value">{{ buttonPin.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmButtonPin()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--FIRMWAREVERSION-->
    <template v-if="singleDevice.name === 'FirmwareVersion'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" min="0" max="9999"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--LocationLatitude-->
    <template v-if="singleDevice.name === 'LocationLatitude'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="-90" max="90"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--LocationLongitude-->
    <template v-if="singleDevice.name === 'LocationLongitude'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="-180" max="180"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--EFFECTXOFFSET-->
    <template v-if="singleDevice.name === 'EffectXOffset'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="32" min="0" max="65535"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--EFFECTYOFFSET-->
    <template v-if="singleDevice.name === 'EffectYOffset'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="32" min="0" max="65535"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--EFFECTTIMEOFFSET-->
    <template v-if="singleDevice.name === 'EffectTimeOffset'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="32" min="0" max="65535"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MASTERID-->
    <template v-if="singleDevice.name === 'MasterId'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="99"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MAINLOCATIONNAME-->
    <template v-if="singleDevice.name ==='MainLocationName'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editText" @blur="$v.editText.$touch()" :placeholder="singleDevice.value" type="text"
                       modifier="material"></v-ons-input>
          <p v-if="!$v.editText.minLen">
            Please enter a minimum of {{$v.editText.$params.minLen.min}} characters.
          </p>
          <p v-if="!$v.editText.maxLen">
          Please enter a maximum of {{$v.editText.$params.maxLen.max}} characters.
        </p>
          <v-ons-button v-on:click="confirmTextValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--WIFIMODE-->
    <template v-if="singleDevice.name === 'WiFiMode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedWifiMode" modifier="material underbar" selected>
            <option v-for="wifiMode in wifiModes" :value="wifiMode.value">{{ wifiMode.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmWifi()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--APPMODE-->
    <template v-if="singleDevice.name === 'AppMode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAppMode" modifier="material underbar">
            <option v-for="appMode in appModes" :value="appMode.value">{{ appMode.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAppMode()" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MASTERSLAVEMODE-->
    <template v-if="singleDevice.name === 'MasterSlaveMode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedMasterSlaveMode" modifier="material underbar">
            <option v-for="masterSlaveMode in masterSlaveModes" :value="masterSlaveMode.value">{{ masterSlaveMode.text
              }}
            </option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmMasterSlaveMode()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--USERSETS-->
    <!-- -------- -->
    <!--LOCATION NAME-->
    <template v-if="singleDevice.name ==='LocationName'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editText" @blur="$v.editText.$touch()" type="text" modifier="material" max="24"></v-ons-input>
          <p v-if="!$v.editText.maxLen.max">
            Please enter a maximum of {{$v.editText.$params.maxLen.max}} characters.
          </p>
          <v-ons-button v-on:click="confirmTextValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--PINCODE-->
    <template v-if="singleDevice.name === 'PinCode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="9999"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MANUAL OFFSET-->
    <template v-if="singleDevice.name === 'ManualOffset'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="-12" max="14"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>


    <!--Timer1-Wake-up-Hour-->
    <template v-if="singleDevice.name === 'Timer1-Wake-up-Hour'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="23"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer1-Wake-up-Min-->
    <template v-if="singleDevice.name === 'Timer1-Wake-up-Min'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="59"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer1-Sleep-Hour-->
    <template v-if="singleDevice.name === 'Timer1-Sleep-Hour'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="23"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer1-Sleep-Minutes-->
    <template v-if="singleDevice.name === 'Timer1-Sleep-Minutes'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="59"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--TIMER2-->
    <!--Timer2-Wake-up-Hour-->
    <template v-if="singleDevice.name === 'Timer2-Wake-up-Hour'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="23"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer2-Wake-up-Minutes-->
    <template v-if="singleDevice.name === 'Timer2-Wake-up-Minutes'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="59"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer2-Sleep-Hour-->
    <template v-if="singleDevice.name === 'Timer2-Sleep-Hour'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="23"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer2-Sleep-Minutes-->
    <template v-if="singleDevice.name === 'Timer2-Sleep-Minutes'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="59"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--RandomMode-Hue-Min-->
    <template v-if="singleDevice.name === 'RandomMode-Hue-Min'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="359"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--RandomMode-Hue-Max-->
    <template v-if="singleDevice.name === 'RandomMode-Hue-Max'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="359"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Default-Hue-->
    <template v-if="singleDevice.name === 'Default-Hue'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="359"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Default-Harmony-->
    <template v-if="singleDevice.name === 'Default-Harmony'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="5"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MasterBrightness-->
    <template v-if="singleDevice.name === 'MasterBrightness'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--ColorTemperature-->
    <template v-if="singleDevice.name === 'ColorTemperature'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MaximumSaturation-->
    <template v-if="singleDevice.name === 'MaximumSaturation'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" v-if="singleDevice.name === 'MaximumSaturation'"
                       type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" v-if="singleDevice.name === 'MaximumSaturation'"
                        :disabled="$v.$invalid" modifier="outline">update
          </v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MinimumSaturation-->
    <template v-if="singleDevice.name === 'MinimumSaturation'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MaximumBrightness-->
    <template v-if="singleDevice.name === 'MaximumBrightness'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--MinimumBrightness-->
    <template v-if="singleDevice.name === 'MinimumBrightness'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="1" min="0" max="255"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--EffectSpeed-->
    <template v-if="singleDevice.name === 'EffectSpeed'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-input v-model="editNum" @blur="$v.editNum.$touch()" modifier="material" type="number" step="32" min="0" max="32767"></v-ons-input>
          <p v-if="!$v.editNum.between">
            Please enter a value between {{$v.editNum.$params.between.min}} and {{$v.editNum.$params.between.max}}
          </p>
          <v-ons-button v-on:click="confirmNumValue()" :disabled="$v.$invalid" modifier="outline">update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--TimeZone-->
    <!--Timer1-->
    <template v-if="singleDevice.name === 'Timer1'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedTimer" modifier="material underbar">
            <option v-for="time in timer" :value="time.value">{{ time.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmTimer()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Timer2-->
    <template v-if="singleDevice.name === 'Timer2'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedTimer" modifier="material underbar">
            <option v-for="time in timer" :value="time.value">{{ time.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmTimer()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Auto-Random-Timer-Every-->
    <template v-if="singleDevice.name === 'Auto-Random-Timer-Every'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAutoRandomEvery" modifier="material underbar">
            <option v-for="autoRandomEvery in autoRandomsEvery" :value="autoRandomEvery.value">{{ autoRandomEvery.text
              }}
            </option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAutoRandomEvery()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--Auto-Random-After-Interation-->
    <template v-if="singleDevice.name === 'Auto-Random-After-Interation'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedAutoRandom" modifier="material underbar">
            <option v-for="autoRandom in autoRandoms" :value="autoRandom.value">{{ autoRandom.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmAutoRandom()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>


    <!--RandomMode-->
    <template v-if="singleDevice.name === 'RandomMode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedRandom" modifier="material underbar" selected>
            <option v-for="random in randoms" :value="random.value">{{ random.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmRandom()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--EffectMode-->
    <template v-if="singleDevice.name === 'EffectMode'">
      <v-ons-list-item class="list-item-bg">
        <div class="text-input-wrapper">
          <v-ons-select v-model="selectedEffectMode" modifier="material underbar">
            <option v-for="effect in effects" :value="effect.value">{{ effect.text }}</option>
          </v-ons-select>
          <v-ons-button v-on:click="confirmEffectMode()" modifier="outline" ripple>update</v-ons-button>
        </div>
      </v-ons-list-item>
    </template>

    <!--</transition>-->
  </v-ons-list>
</template>

<script>
  import InputSlider from './InputISlider.vue';
  import Checkbox from './Checkbox.vue';
  import {
    required,
    email,
    numeric,
    minValue,
    maxValue,
    minLength,
    maxLength,
    sameAs,
    requiredUnless,
    between,
  } from 'vuelidate/lib/validators'

  export default {
    props: ['singleDevice'],
    data() {
      return {
        onEdit: false,
        edited: 'color:#777',
        editText: this.singleDevice.value,
        editNum: Number(this.singleDevice.value),
        selectedAutoRandom: Number(this.singleDevice.value),
        selectedEffectMode: Number(this.singleDevice.value),
        selectedAutoRandomEvery: Number(this.singleDevice.value),
        selectedRandom: Number(this.singleDevice.value),
        selectedTimer: Number(this.singleDevice.value),
        selectedButtonPin: Number(this.singleDevice.value),
        selectedAppMode: Number(this.singleDevice.value),
        selectedWifiMode: Number(this.singleDevice.value),
        selectedMasterSlaveMode: Number(this.singleDevice.value),
        autoRandomText: '',
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
        timer: [
          {text: 'Off', value: 0},
          {text: 'Everyday', value: 1},
          {text: 'Weekdays Only', value: 2},
          {text: 'Weekends Only', value: 3},
        ],
        randoms: [
          {text: 'Hue and Harmony', value: 0},
          {text: 'Only Warm Hues', value: 1},
          {text: 'Only Cold Hues', value: 2},
          {text: 'Hue Range', value: 3},
          {text: 'Hue and Analogic Harmonies', value: 4},
        ],
        autoRandoms: [
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
        autoRandomsEvery: [
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
      }
    },
    validations() {
      switch (this.singleDevice.name) {
        case 'ProductRange':
        case 'PinCode':
        case 'ProductId':
        case 'FirmwareVersion':
          return {editNum: {required, numeric, between: between(0, 9999)}};
          break;
        case 'LocationLatitude':
          return {editNum: {required, numeric, between: between(-90, 90)}};
          break;
        case 'LocationLongitude':
          return {editNum: {required, numeric, between: between(-180, 180)}};
          break;
        case 'EffectYOffset':
        case 'EffectXOffset':
        case 'EffectTimeOffset':
          return {editNum: {required, numeric, between: between(0, 65535)}};
          break;
        case 'MasterId':
          return {editNum: {required, numeric, between: between(0, 99)}};
          break;
        case 'ManualOffset':
          return {editNum: {required, numeric, between: between(-12, 14)}};
          break;
        case 'Timer1-Sleep-Hour':
        case 'Timer1-Wake-up-Hour':
        case 'Timer2-Sleep-Hour':
        case 'Timer2-Wake-up-Hour':
          return {editNum: {required, numeric, between: between(0, 23)}};
          break;
        case 'Timer1-Sleep-Minutes':
        case 'Timer2-Sleep-Minutes':
        case 'Timer1-Wake-up-Minutes':
        case 'Timer2-Wake-up-Minutes':
          return {editNum: {required, numeric, between: between(0, 59)}};
          break;
        case 'RandomMode-Hue-Min':
        case 'RandomMode-Hue-Max':
        case 'Default-Hue':
          return {editNum: {required, numeric, between: between(0, 359)}};
          break;
        case 'Default-Harmony':
          return {editNum: {required, numeric, between: between(0, 5)}};
          break;
        case 'MasterBrightness':
        case 'ColorTemperature':
        case 'MaximumSaturation':
        case 'MinimumSaturation':
        case 'MaximumBrightness':
        case 'MinimumBrightness':
          return {editNum: {required, numeric, between: between(0, 255)}};
          break;
        case 'EffectSpeed':
          return {editNum: {required, numeric, between: between(0, 32767)}};
          break;
        case 'MainLocationName':
        case 'LocationName':
            return {editText: {required,minLen:minLength(4), maxLen:maxLength(24)}};
            break;
      }
    },
    components: {
      appInputSlider: InputSlider,
      appCheckbox: Checkbox
    },
    methods: {
      confirmAction() {
        let changedVal = {val: this.singleDevice};
        console.log('changedVal: ', changedVal);
        this.$store.dispatch('editSetting', {
          name: changedVal.val.name,
          value: changedVal.val.value,
          key: changedVal.val.key
        });
        this.onEdit = false;
        this.edited = 'color:green';
      },
      confirmRandom() {
        this.singleDevice.value = this.selectedRandom;
        this.confirmAction();
      },
      confirmEffectMode() {
        this.singleDevice.value = this.selectedEffectMode;
        this.confirmAction();
      },
      confirmAutoRandom() {
        this.singleDevice.value = this.selectedAutoRandom;
        this.confirmAction();
      },
      confirmAutoRandomEvery() {
        this.singleDevice.value = this.selectedAutoRandomEvery;
        this.confirmAction();
      },
      confirmTimer() {
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
          key: changedVal.val.key
        });
        this.onEdit = false;
        this.edited = 'color:green'
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
  .text-input--material:invalid {
    border: 1px solid red;
    background-color: #ffc9aa;
    color:yellow;
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
