var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', function(req, res){
  res.send('this is the homepage');
})

app.get('/contact', function(req, res){
  res.sendFile(path.resolve('public/contact.html'));
})

app.get('/profile/:name', function(req, res){
  var data = {age: 29, job: 'Postman', hobbies: ['Snowboarding', 'Poker', 'Blacksmithing']}
  res.render('profile', {person: req.params.name, data: data})
})
app.listen(3000);
