<template>
  <!-- TODO: ADD V-if for if chat needs to be shown -->
  <div>
    <textarea name="chatbox" id="chatbox" cols="30" rows="10">
    </textarea>
    <input type="text"><input type="submit" id="chat.submit" value="Send">
  </div>
</template>

<script>
export default
{
  data()
  {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },
  sockets:
      {
        connect()
        {
          this.isConnected = true;
        },
        disconnect()
        {
          this.isConnected=false;
        }
      },
  methods:
      {
        sendChat(data)
        {
          this.$socket.emit('chat.send', data)
        }
      }
}
</script>

