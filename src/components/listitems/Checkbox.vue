<template>
  <div class="checkboxContainer">
    <label for="true">True</label>
    <input type="radio" id="true" v-model="toggle" value="1">
    <label for="false">False</label>
    <input type="radio" id="false" v-model="toggle" value="0">
    {{toggle}}
  </div>
</template>

<script>
  export default {
    props:['singleDevice'],
      data(){
          return {
            toggle  :0
          }
      }
  }
</script>

<style scoped>
  .checkboxContainer {
    width: 100%;
  }
</style>
