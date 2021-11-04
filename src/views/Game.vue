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

export default
{
  props: {
    player: Object
  },
  sockets:{

  },
  components:
      {
        Chat,
        Game
      }
}
</script>

