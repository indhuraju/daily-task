var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var Book = require('./Book');
//
// var db = 'mongodb://localhost/example';

// mongoose.connect(db);
router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var Movie = mongoose.model('Movie', movieSchema, 'movie');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var port = 8080;

app.listen(port,function(){
  console.log('app listening on port'+ port);
});
