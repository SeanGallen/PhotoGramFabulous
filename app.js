const express = require('express');
const reload = require('reload');
const http = require('http');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug');
app.use(express.static(path.join('public')));

app.use(require('./routes/index'));
app.use(require('./routes/albums'));

const server = http.createServer(app);

reload(server, app);


server.listen(app.get('port'), function() {
  console.log(`Example app listen on port ${app.get('port')}!`);
})

