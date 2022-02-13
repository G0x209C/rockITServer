function bootstrap_messaging(socket) {
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
  // retrieve messages from the database
  socket.post('/chat/getmessages', {}, (resData, jwRes) => {
    if (jwRes.statusCode == 200) {
      for (let i = 0; i < resData.length; i++) {
        $('#chatmessages').append(`
        <div class="row">
            <div class="col-sm-4">${resData[i].name}</div>
            <div class="col-sm-6">${resData[i].msg}</div>
        </div>`);
      }

    } else {
      console.log(`error in getting data..\n
      errorMsg: ${jwRes.error}`);
    }
  });

  // register an event for new messages;
  socket.on('newmsg', (data) => {
    // append the new message to the messagebox.
    $('#chatmessages').append(`
        <div class="row">
            <div class="col-sm-4">${data.name}</div>
            <div class="col-sm-6">${data.msg}</div>
        </div>`);
  });

}

function sendmessage(socket, msg) {
  $('#chatmessages').append(`
        <div class="row">
            <div class="col-sm-4">${Cookies.get('name')}</div>
            <div class="col-sm-6">${msg}</div>
        </div>`);
  socket.post('/chat/sendmessage', {msg: msg}, (resData, jwRes) => {
    if (jwRes.statusCode == 200) {

    } else {
      console.log(`error in getting data..\n
      errorMsg: ${jwRes.error}`);
    }
  });
$('#chatinput').val('');
}
