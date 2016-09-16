// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var session = require('express-session');
var path = __dirname + '/views/';
var options = {
  nfl: {
      version: 'nfl/v3',
      key: ' 01c35bafdc1b44f6b555db93e7997b0c' // <-- Pass in your nfl key here
    }
};
var fantasyData = require('fantasydata-api')(options);


//var YahooStrategy = require('passport-yahoo-oauth');
//var passport = require('passport'), YahooStrategy = require('passport-yahoo-oauth').Strategy;
//var yahooConsumerKey = 'dj0yJmk9MnlNUTNNZzhjTGpNJmQ9WVdrOWFVeHFVMVJ4TkhVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zMg--';
//var yahooConsumerSecret = '8c7fc130352fabcbee34f89c60f01a6d06dcb79b';
var request = require('request');

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: yahooConsumerSecret
// }));

app.use(express.static('static'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function (req, res) {
  // var season = '2015REG';
  // fantasyData.nfl.currentSeason(function(err, results){
  //   console.log(results);
  // });

  res.sendFile(path + 'index.html');
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
