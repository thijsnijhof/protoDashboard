<template>
  <div id="slidecontainer">
    <input type="range" min="0" max="9999" value="50" class="slider" id="myRange">
  </div>
</template>

<script>
  export default {

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
</style>
