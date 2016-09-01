// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var yahooFantasy = require('yahoo-fantasy');
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.use(express.static('static'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
