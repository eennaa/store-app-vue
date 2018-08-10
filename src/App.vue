<template>
  <div id="app">
    <nav class="navbar navbar-light" style="background-color: #ffd1f7;">
      <a class="navbar-brand nav-link disabled" href="#">Store App</a>     
          <a class="nav-item nav-link active" href="/#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/products">Products</a>
          <a class="nav-item nav-link" href="/customers">Customers</a>
          <!-- <a class="nav-item nav-link disabled" href="#">Disabled</a>         -->
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
