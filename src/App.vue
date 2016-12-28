<template>
  <div id="app">
    <search></search>
    <img src="./assets/logo.png" class="logo">
    <hello></hello>
    <player></player>
  </div>
</template>

<script>
import Search from './components/Search'
import Hello from './components/Hello'
import Player from './components/Player'

export default {
  name: 'app',
  components: {
    Search,
    Hello,
    Player
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  height: 100%;
  margin: 0 auto;
}
input {
  outline: none;
}
.logo{
    position: fixed;
    top: 142px;
    margin: auto;
    left: 0;
    right: 0;
}
a{
  text-decoration: none;
}
</style>
