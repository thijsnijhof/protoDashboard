<template>
  <section>
    <h1>AVAILABLE DEVICES</h1>
    <button><i class="fa fa-power-off icon" aria-hidden="true"></i>LOGOUT</button>
  </section>
</template>

<script>

</script>

<style scoped>
  section {
    display: flex;
    flex: 1 1 10%;
    max-height: 50px;
    flex-direction: row;
    background: #fff;
    border-bottom:1px solid deepskyblue;
    justify-content: space-between;
    align-items:center;
    box-shadow: 2px 2px #222;
  }

  button {
    display:flex;
    height: 50%;
    width:10%;
    min-width:75px;
    align-self:center;
    margin-right:5%;
    background-color: #fff;
    border:2px solid deepskyblue;
    border-radius:3px;
    color: deepskyblue;
    flex-wrap:nowrap;
    justify-content: flex-start;
    align-items:center;
  }
  h1 {
    margin:2%;
    font-weight:100;
    font-size:large;
  }

  .icon {
    margin-right:5px;
  }
</style>
