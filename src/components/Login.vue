<template >
  <v-ons-page>
    <div class="background"></div>
  <div class="container">
    <form @submit.prevent="onSubmit({username, password})" class="login-container" ref="indexform" id="indexform">
      <h1>LOGIN</h1>
      <hr>
      <v-ons-input type="text" v-model="username" placeholder="Username" modifier="material"></v-ons-input>
      <v-ons-input type="password" v-model="password" placeholder="Password" modifier="material"></v-ons-input>
      <!--<v-ons-button modifier="large" type="submit">LOGIN</v-ons-button>-->

      <!--<v-ons-input class="login-input" type="text" v-model="username" placeholder="Username"></v-ons-input>-->
      <!--<v-ons-input type="password" class="login-input" v-model="password" placeholder="Password"></v-ons-input>-->
      <button type="submit" class="login-button">LOGIN</button>
    </form>
  </div>
  </v-ons-page>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        // assign the user input
        const formData = {
          username: this.username,
          password: this.password,
        };
        // dispatches the login action from the store
//        this.$store.dispatch('navigator/login', {username: formData.username, password: formData.password})
        this.$store.dispatch('login', {username: formData.username, password: formData.password})
      }
    }
  }

</script>

<style scoped>
  .background {
    background: #555; /* For browsers that do not support gradients */
    background: -webkit-radial-gradient(#555, #222); /* For Safari 5.1 to 6.0 */
    background: -o-radial-gradient(#555, #222); /* For Opera 11.1 to 12.0 */
    background: -moz-radial-gradient(#555, #222); /* For Firefox 3.6 to 15 */
    background: radial-gradient(#555, #222); /* Standard syntax */
  }
  h1 {
    font-size: large;
  }

  hr {
    background-color: deepskyblue;
    width: 100%;
    height: 2px;
    border: none;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100%;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 20px;
    background: #fff;
    box-shadow: 2px 2px 2px #222;
  }

  .login-input {
    flex: 1 0 35px;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 25px;
    margin: 3px;
    border-bottom: 1px solid #bebebe;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: medium;
    background: #fff;
  }

  .login-button {
    display: flex;
    flex: 1 0 45px;
    font-size: large;
    font-weight: bold;
    border: none;
    margin-top: 5px;
    padding-top: 5px;
    /*padding-bottom:25px;*/
    align-items: center;
    justify-content: center;
    background: deepskyblue;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
</style>
