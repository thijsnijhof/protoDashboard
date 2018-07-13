<template>
  <!--USEVOLTSENSE-->
  <div class="text-input-wrapper">
    <v-ons-switch v-model="singleDevice.value">
                  <!--v-if="singleDevice.name === 'useVoltSense'"-->
    </v-ons-switch>
    <v-ons-button v-on:click="confirmBoolValue()"
                  v-if="singleDevice.name === 'useVoltSense'"
                  modifier="outline">update
    </v-ons-button>
  </div>
</template>

<script>
  export default {
    props:['singleDevice'],
    data(){
      return {
        edited:'color:#777',
      }
    },
    created(){
      console.log('created: ', this.singleDevice);
    },
    methods: {
      confirmBoolValue() {
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
    }
  }
</script>

<style scoped>
  .text-input-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
