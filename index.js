// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var session = require('express-session');
var path = __dirname + '/views/';
var params = {
  format: 'JSON',
  season: '2015REG'
};

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
  // req.headers["Authorization"] = "01c35bafdc1b44f6b555db93e7997b0c"
  //
  // request.get({
  //   url: "https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerSeasonStatsByPlayerID/2015REG/732?"
  // },
  //
  // function(error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //           res.json(body);
  //          }
  //       else{
  //         console.log('fuck');
  //         console.log(response.statusCode);
  //       }
  //      });

  res.sendFile(path + 'index.html');
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
