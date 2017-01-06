const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug');
app.use(express.static(path.join('public')));

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(app.get('port'), function() {
  console.log(`Example app listen on port ${app.get('port')}!`);
})
