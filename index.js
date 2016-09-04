// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var yahooFantasy = require('yahoo-fantasy');
var qs = require('qs');
var router = express.Router();
var path = __dirname + '/views/';
var yAPPLICATION_KEY = 'dj0yJmk9MnlNUTNNZzhjTGpNJmQ9WVdrOWFVeHFVMVJ4TkhVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zMg--';
var yAPPLICATION_SECRET = '8c7fc130352fabcbee34f89c60f01a6d06dcb79b';

var clientId = process.env.CLIENT_ID || yAPPLICATION_KEY;
var clientSecret = process.env.CLIENT_SECRET || yAPPLICATION_SECRET;
var redirectUri = process.env.REDIRECT_URI || 'https://footballtoolkit.heroku.com/auth/yahoo/callback';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.get('/auth/yahoo', function(req, res) {
  var authorizationUrl = 'https://api.login.yahoo.com/oauth2/request_auth';

  var queryParams = qs.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code'
  });

  res.redirect(authorizationUrl + '?' + queryParams);
});

app.use(express.static('static'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
