const express=require('express');
const http=require('http');
const app=express();
const path=require('path');
const server=http.createServer(app);
const {Server}=require('socket.io');


app.use(express.static(path.resolve("./public")));

const io=new Server(server);
io.on('connection',(socket)=>{
  console.log('A user connected', socket.id);
  socket.on('chat message',(msg)=>{
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});