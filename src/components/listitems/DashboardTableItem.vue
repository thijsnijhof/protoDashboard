<template>

  <!--<tr class="table-row">-->
  <!--<td>{{singleDevice.name}}</td>-->
  <!--<td>{{singleDevice.value}}</td>-->
  <!--<td class="edit">-->
  <!--<app-input-slider v-if="singleDevice.name === 'ProductRange'"></app-input-slider>-->
  <!--<app-input-slider v-if="singleDevice.name === 'ProductId'"></app-input-slider>-->
  <!--<app-checkbox v-if="singleDevice.name === 'useVoltSense'"></app-checkbox>-->
  <!--<app-checkbox v-if="singleDevice.name === 'hasRockerSwitch'"></app-checkbox>-->
  <!--<app-checkbox v-if="singleDevice.name === 'hasPushButton'"></app-checkbox>-->
  <!--<app-checkbox v-if="singleDevice.name === 'hasPIRSensor'"></app-checkbox>-->
  <!--<app-checkbox v-if="singleDevice.name === 'hasRTCBattery'"></app-checkbox>-->
  <!--<input v-if="singleDevice.value !== ''" type="checkbox">-->
  <!--</td>-->
  <!--</tr>-->


  <v-ons-list modifier="material">
    <v-ons-list-header class="list-header-bg">
      {{singleDevice.name}}

      <v-ons-checkbox id="checkbox" v-model="onEdit" modifier="material" v-if="singleDevice.value !== ''" ></v-ons-checkbox>

    </v-ons-list-header>
    <!--<div class="left">{{singleDevice.name}}</div>-->

    <v-ons-list-item class="list-item-val-bg">{{singleDevice.value}}</v-ons-list-item>
    <transition name="insert">

    <v-ons-list-item class="list-item-bg" v-if="onEdit">
      <v-ons-range min="0" max="100" style="width:100%;" modifier="material" v-if="singleDevice.name === 'ProductRange'"></v-ons-range>
      <v-ons-range min="0" max="100" style="width:100%;" modifier="material" v-if="singleDevice.name === 'ProductId'"></v-ons-range>
      <v-ons-checkbox v-if="singleDevice.name === 'useVoltSense'"></v-ons-checkbox>
      <v-ons-checkbox v-if="singleDevice.name === 'hasRockerSwitch'"></v-ons-checkbox>
      <v-ons-checkbox v-if="singleDevice.name === 'hasPushButton'"></v-ons-checkbox>
      <v-ons-checkbox v-if="singleDevice.name === 'hasPIRSensor'"></v-ons-checkbox>
      <v-ons-checkbox v-if="singleDevice.name === 'hasRTCBattery'"></v-ons-checkbox>
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
        onEdit:false
      }
    },
    created() {
//      console.log({singleDevice});
    },
    components: {
      appInputSlider: InputSlider,
      appCheckbox: Checkbox
    },
//    methods:{
//      onEdit(){
//
//      }
//    }

  }
</script>

<style scoped>
  .list-item-bg{
    background: #fff;
    /*border-top:1px solid #bdbdbd;*/
  }
  .list-header-bg{
    background: #e4f8f1;
    padding:10px;
    /*border-top:1px solid #bdbdbd;*/
    display:flex;
    justify-content:space-between;
  }
  .list-item-val-bg{
    background: #f7f7f7;
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
    background-color:#999;
  }
  .insert-enter-active {
    animation: insert-in .5s;
  }
  .insert-leave-active {
    animation: insert-in .5s reverse;
  }
  @keyframes insert-in {
    0% {
      height:0;
      width:0;
      opacity:0;
    }
    25% {
      height:auto;
      width:20%;
      opacity:0.3;
    }
    50% {
      height:auto;
      width:50%;
      opacity:0.6;
    }
    75% {
      height:auto;
      width:90%;
      opacity:1;
    }
    100% {
      height:auto;
      width:100%;
    }
  }
</style>
