<template>
  <!--<section>-->
  <!--<h1>AVAILABLE DEVICES</h1>-->
  <!--<h1>{{$route.name}}</h1>-->
  <!--<button @click="onLogout"><i class="fa fa-power-off icon" aria-hidden="true"></i>LOGOUT</button>-->
  <!--</section>-->
  <v-ons-toolbar modifier="material" class="header-toolbar">
    <div class="left title">Devices</div>
    <div class="center title">
      {{$route.name}}
    </div>
    <div class="right">
      <v-ons-button modifier="quiet" @click="onLogout" ripple><i class="fa fa-power-off icon" aria-hidden="true"></i></v-ons-button>
    </div>
  </v-ons-toolbar>
</template>

<script>
  export default {
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
  .header-toolbar {
    display:flex;
    justify-content: space-evenly;
    text-align:center;
    padding:0 10px;
  }

  .toolbar--material__center {
    text-align:center;
  }

  /*section {*/
    /*display: flex;*/
    /*flex: 1 1 10%;*/
    /*max-height: 50px;*/
    /*flex-direction: row;*/
    /*background: #fff;*/
    /*border-bottom: 1px solid deepskyblue;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*box-shadow: 2px 2px #222;*/
  /*}*/

  /*button {*/
    /*display: flex;*/
    /*height: 50%;*/
    /*width: 10%;*/
    /*min-width: 75px;*/
    /*align-self: center;*/
    /*margin-right: 5%;*/
    /*background-color: #fff;*/
    /*border: 2px solid deepskyblue;*/
    /*border-radius: 3px;*/
    /*color: deepskyblue;*/
    /*flex-wrap: nowrap;*/
    /*justify-content: flex-start;*/
    /*align-items: center;*/
  /*}*/

  h1 {
    margin: 2%;
    font-weight: 100;
    font-size: large;
  }

  .icon {
    font-size:1.5em;
  }
</style>
