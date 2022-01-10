const path = require('path');
const express= require('express');
const app = express();
const http = require('http').createServer(app);

const port = 8080;

app.use(express.static(path.join(__dirname, './client/')));

http.listen(port,()=>{
  console.log(`Server is now listening on *:${port}`);
});
