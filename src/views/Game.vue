<template>
  <div>
    <!-- TODO: Add dynamic game component -->
    <Game></Game>
    <chat> <!-- Added chat component to screen -->
    </chat>
  </div>
</template>

<script>
import Chat from "../components/Chat";
import Game from "../components/Game";
import {ActionheroWebsocketClient} from "@/assets/ActionheroWebsocketClient";

export default
{
  props: {
    player: Object,
  },
  sockets:{

  },
  components:
      {
        Chat,
        Game
      },
  mounted(){
    this.client = new ActionheroWebsocketClient({url:'http://localhost:8080'});

  }
}
</script>

