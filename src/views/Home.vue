<template>
  <Nav></Nav>
  <div>
    <form>
      <label for="start.name">Naam</label>
      <input type="text" id="start.name"><br>
      <label for="start.room">Gamecode</label>
      <input type="text" id="start.room"><br>
      <input type="submit" id="start.submit" @click="startGame">
    </form>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

  export default
  {
      components:{
        Nav
      },
      sockets:{
        gameJoinSuccess(data)
        {
          console.log(data);
        },
        initClient(data)
        {
          console.log(data);
          window.test = data;
        }
      },
      data()
      {
        return {
          id: null,
          name: null,
          room: null
        }
      }
  }
</script>

<style scoped>
@media(max-width: 960px)
{
  div
  {
    width:80%;
  }
}
@media(min-width: 961px)
{
  div
  {
    width:30%;

  }
}
div
{
  margin-left: auto;
  margin-right:auto;
}
form
{
  display:grid;
}



</style>