// Pasha Pourmand
// Sept 17, 2016
var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var session = require('express-session');
var path = __dirname + '/views/';
var options = {
  nfl: {
      version: 'nfl/v3',
      key: ' 01c35bafdc1b44f6b555db93e7997b0c'
    }
};
var fantasyData = require('fantasydata-api')(options);

var request = require('request');

app.use(express.static('static'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
