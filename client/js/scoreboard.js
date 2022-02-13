function bootstrap_scoreboard(socket) {

  let exists = true;
  //check if user exists
  socket.post('/api/checkuserexists', {}, (resData, jwRes) => {
    if (!jwRes.statusCode == 200) {
      console.log(jwRes.error);
      exists = false;
    }
  });
  if (!exists) {
    throw Error('User doesn\'t exist in database');
  }
  // register the socket to the correct room.
  socket.post('/api/joinroom', {room: Cookies.get('room')}, (resData, jwRes) => {
    if (jwRes.statusCode == 200) {
      console.log('room successfully joined');
    } else {
      console.log(jwRes.error);
    }
  });

  socket.post('/api/getscoreboard', (resData, jwRes) => {
    if (jwRes.statusCode == 200) {
      $('#scoreboard').empty(); // empty list first
      // loop through data and add to scoreboard.
      console.log(resData);
      for (let i = 0; i < resData.length; i++) {
        $('#scoreboard').append(`
        <div class="list-group-item">
            <div class="row ${resData[i].isHost ? 'text-danger' : 'text-info'}">
                <div class="col">
                    ${resData[i].name}
                </div>
                <div class="col">
                    ${resData[i].score}
                </div>
            </div>
        </div>`);
      }
    } else {
      console.log(jwRes.error);
      // error messages will be added to the chatbox.
      $('#chatmessages').append(`
        <div class="row"><div class="col">
        <p class="text-danger">Error message:</p>
        </div>
        <div>
            <p class="text-danger">Failed to get scoreboard</p>
        </div>
        </div>`);
    }
  });

  // register a method for updating the scoreboard on scoreboardupdate event.
  socket.on('scoreboardupdate', (data) => {
    $('#scoreboard').empty(); // empty list first
    // loop through data and add to scoreboard.
    for (let i = 0; i < data.length; i++) {
      $('#scoreboard').append(`
        <div class="list-group-item">
            <div class="row ${data[i].isHost ? 'text-danger' : 'text-info'}">
                <div class="col">
                    ${data[i].name}
                </div>
                <div class="col">
                    ${data[i].score}
                </div>
            </div>
        </div>`);
    }
  });

};
