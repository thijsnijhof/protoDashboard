<template>
  <section class="dashboard-container">
    <div class="dashboard-header">
      <section class="devices-list">
        <label for="devices"><i class="fa fa-list icon" aria-hidden="true"></i></label>
        <select name="devices" id="devices">
          <option value="device_names">MAKE_DYNAMIC</option>
          <option value="device_names">MAKE_DYNAMIC</option>
        </select>
      </section>
      <button class="bulk-edit">BULK EDIT</button>
      <section class="collapse-container">
        <p class="collapse-all">COLLAPSE ALL</p>
        <i class="fa fa-angle-double-down icon" aria-hidden="true"></i>
      </section>
    </div>

    <table class="dashboard-block">
      <tr class="table-head">
        <th>Defaults</th>
        <th>Value</th>
        <th>Edit</th>
      </tr>
      <tr class="table-row">
        <td>default harmony</td>
        <td>200</td>
        <td class="edit">
          <div id="slidecontainer">
            <input type="range" min="1" max="255" value="50" class="slider" id="myRange">
          </div>
          <input type="checkbox">
        </td>
      </tr>
    </table>

  </section>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to the Dashboard page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #devices {
    background-color: #fff;
    border: none;
    font-weight: 100;
    color: #999;

  }

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

  .dashboard-container {
    display: flex;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    margin-right: 5%;
    margin-left: 5%;
    flex-wrap: wrap;

  }

  .dashboard-block {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: transparent;
  }

  .dashboard-header {
    margin-top: 3px;
    display: flex;
    background-color: deepskyblue;
    align-items: center;
    justify-content: space-between;

  }

  .icon {
    margin-left: 10px;
    margin-right: 5px;
    color: #fff;
  }

  .bulk-edit {
    color: #fff;
    background: deepskyblue;
    border: 2px solid #fff;
    align-self: center;
    flex-wrap: wrap;
  }

  .collapse-container {
    display: flex;
    align-items: center;
    justify-self: flex-end;
  }

  .collapse-all {
    color: #fff;
    font-size: small;
  }

  .table-head {
    display: flex;
    justify-content: space-between;
    background-color: #777;
    height: 7%;
    align-items: center;
    padding: 0 10px 0 10px;
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

