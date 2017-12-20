<template>
  <tr class="table-row">
    <td>{{singleDevice.name}}</td>
    <td>{{singleDevice.value}}</td>
    <td class="edit">
      <app-input-slider v-if="singleDevice.name === 'ProductRange'"></app-input-slider>
      <app-input-slider v-if="singleDevice.name === 'ProductId'"></app-input-slider>
      <app-checkbox v-if="singleDevice.name === 'useVoltSense'"></app-checkbox>
      <app-checkbox v-if="singleDevice.name === 'hasRockerSwitch'"></app-checkbox>
      <app-checkbox v-if="singleDevice.name === 'hasPushButton'"></app-checkbox>
      <app-checkbox v-if="singleDevice.name === 'hasPIRSensor'"></app-checkbox>
      <app-checkbox v-if="singleDevice.name === 'hasRTCBattery'"></app-checkbox>
      <input v-if="singleDevice.value !== ''" type="checkbox">
    </td>
  </tr>
</template>

<script>
  import InputSlider from './InputISlider.vue';
  import Checkbox from './Checkbox.vue';

  export default {
    props:['singleDevice'],
    created(){
//      console.log({singleDevice});
    },
    components: {
      appInputSlider: InputSlider,
      appCheckbox: Checkbox
    }

  }
</script>

<style scoped>
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
</style>
