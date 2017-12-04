<template>
  <section class="device-container">
    <div class="device-top">
      <div class="active-icon"></div>
      <h1 class="device-top-text">DEVICE_NAME</h1>
    </div>
    <div class="device-content">
        <ul class="properties">
          <li>last online - now</li>
          <li>location: example_location</li>
          <li>masterSlaveId: 123456789</li>
        </ul>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
  .device-container {
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: flex-start;
    margin:5px;
    min-width:25%;
    flex: 1;
    border:2px solid deepskyblue;
    box-shadow: 2px 2px 2px #222;
  }

  .device-top {
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: flex-start;
    border-bottom: 1px solid deepskyblue;
  }

  .device-content {
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .device-top-text {
    font-weight:100;
    font-size:medium;
  }
  .properties {
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self:flex-start;
    list-style: none;
    font-weight:100;
    font-size:small;
  }

  .active-icon {
    height:15px;
    width:15px;
    background-color: limegreen;
    border-radius:50%;
    margin-left: 5%;
    margin-right:5%;
  }
</style>
