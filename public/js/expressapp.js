var express = require('express');


var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
})



app.get('/profile/:id', function(req, res){
  res.send('Profile ID: ' + req.params.id);
})
app.listen(3000);
