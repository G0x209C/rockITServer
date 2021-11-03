<template>
  <Nav></Nav>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- TODO: explain the app -->
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default{
  components:{
    Nav
  }
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>