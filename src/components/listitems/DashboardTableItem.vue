<template>
  <tr class="table-row">
    <td>{{singleDevice.name}}</td>
    <td>{{singleDevice.value}}</td>
    <td class="edit">
      <app-input-slider v-if="singleDevice.name === 'ProductRange'"></app-input-slider>
      <app-input-slider v-if="singleDevice.name === 'ProductId'"></app-input-slider>
      <input type="checkbox">
    </td>
  </tr>
</template>

<script>
  import InputSlider from './InputISlider.vue';
  export default {
    props:['singleDevice'],
    created(){
//      console.log({singleDevice});
    },
    components: {
      appInputSlider: InputSlider
    }

  }
</script>

<style scoped>
  #slidecontainer {
    width: 100%;
  }

  input[type=range] {
    -webkit-appearance: none;
    background: transparent;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    background: #E0E0E0;
    border-radius: 6px;
    border: 1px solid #555;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;

    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid deepskyblue;
    background: #ffffff;
    cursor: pointer;
    margin-top: -5px;
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
</style>
