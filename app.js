const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join('public')));

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(3000, function() {
  console.log('Example app listen on port 3000!');
})

