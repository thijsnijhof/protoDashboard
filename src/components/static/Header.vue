<template>
  <section>
    <h1>AVAILABLE DEVICES</h1>
    <button>LOGOUT</button>
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
    margin-bottom: 10%;
    justify-content: space-between;
    align-items:center;
  }

  button {
    height: 50%;
    width:10%;
    min-width:75px;
    align-self:center;
    margin-right:5%;
    background-color: #fff;
    border:2px solid deepskyblue;
    border-radius:3px;
    color: deepskyblue;
  }
  h1 {
    margin:2%;
    font-weight:100;
    font-size:large;
  }
</style>
