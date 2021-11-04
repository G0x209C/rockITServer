<template>
  <Nav></Nav>
  <div class="container">
    <label for="player.name">Naam</label>
    <input type="text" v-model="player.name" id="player.name"><br>
    <label for="player.room">Gamecode</label>
    <input type="text" v-model="player.room" id="player.room"><br>
    <button type="submit" id="start.submit" @click="startGame">Start game</button>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav
  },
  sockets: {
    initClient(data) {
      console.log(data);
    },
    gameJoinSuccess(data) {
      // TODO: redirect user to game page. (Not implementing gamevote, yet.)
      console.log(data);
      this.$router.push({name: 'Game', params: {player: data.GameClient}});
    }
  },
  methods:
      {
        startGame() {
          this.$socket.client.emit('gameJoin', {name: this.player.name, room: this.player.room});
        }
      },
  data() {
    return {
      player: {
        uuid: null,
        name: null,
        room: null,
        is_host: null,
        score: null,
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div {
    width: 80%;
  }
}

@media (min-width: 961px) {
  div {
    width: 30%;

  }
}

div {
  margin-left: auto;
  margin-right: auto;
}

div.container {
  display: grid;
}

</style>