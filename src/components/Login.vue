<template>
  <div class="container">
    <form @submit.prevent="onSubmit({username, password})" class="login-container">
      <h1>LOGIN</h1>
      <hr>
      <input class="login-input" type="text" v-model="username" placeholder="Username">
      <input type="password" class="login-input" v-model="password" placeholder="Password">
      <button type="submit" class="login-button">LOGIN</button>
    </form>
  </div>
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
        this.$store.dispatch('login', {username: formData.username, password: formData.password})
      }
    }
  }

</script>

<style scoped>
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
