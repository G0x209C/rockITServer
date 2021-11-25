<template>
  <div class="home">


    <form action="" style="width:20%;margin-left:auto;margin-right:auto;">
      <div style="display:grid;">
        <input type="text" placeholder="Naam">
      </div>
      <div>
        <button>Start!</button>
      </div>
    </form>

    <form action="" style="width:20%;margin-left:auto;margin-right:auto;">
      <div style="display:grid;">
        <input type="text" placeholder="GameCode">
        <input type="text" placeholder="Naam">
      </div>
      <div>
        <button>Start!</button>
      </div>
    </form>
  </div>

  <footer>
    <Chat />
  </footer>
</template>

<script>
// @ is an alias to /src


import Chat from "../components/Chat";


export default {
  name: 'Home',
  components: {
    Chat
  },
}
</script>
