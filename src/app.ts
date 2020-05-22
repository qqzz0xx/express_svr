import e from 'express';
import sio from 'socket.io';
import http from 'http';

const app = e();
const http_server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('hello!');
});

let io = sio(http_server);

io.on('connection', (client: sio.Socket) => {
  client;
});

app.listen(5000, () => {
  console.log('start server on 5000');
});
