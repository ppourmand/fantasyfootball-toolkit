// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var yahooFantasy = require('yahoo-fantasy');
var qs = require('qs');
var bodyParser = require('body-parser');
var router = express.Router();
var path = __dirname + '/views/';
var yAPPLICATION_KEY = 'dj0yJmk9MnlNUTNNZzhjTGpNJmQ9WVdrOWFVeHFVMVJ4TkhVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zMg--';
var yAPPLICATION_SECRET = '8c7fc130352fabcbee34f89c60f01a6d06dcb79b';

var clientId = process.env.CLIENT_ID || yAPPLICATION_KEY;
var clientSecret = process.env.CLIENT_SECRET || yAPPLICATION_SECRET;
var redirectUri = process.env.REDIRECT_URI || 'https://footballtoolkit.herokuapp.com/auth/yahoo/callback';

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

app.get('/auth/yahoo/callback', function(req, res) {
  var accessTokenUrl = 'https://api.login.yahoo.com/oauth2/get_token';

  var options = {
    url: accessTokenUrl,
    headers: { Authorization: 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64') },
    rejectUnauthorized: false,
    json: true,
    form: {
      code: req.query.code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    }
  };

  // 1. Exchange authorization code for access token.
  request.post(options, function(err, response, body) {
    var guid = body.xoauth_yahoo_guid;
    var accessToken = body.access_token;
    var socialApiUrl = 'https://social.yahooapis.com/v1/user/' + guid + '/profile?format=json';

    var options = {
      url: socialApiUrl,
      headers: { Authorization: 'Bearer ' + accessToken },
      rejectUnauthorized: false,
      json: true
    };

    // 2. Retrieve profile information about the current user.
    request.get(options, function(err, response, body) {

      // 3. Create a new user account or return an existing one.
      User.findOne({ guid: guid }, function(err, existingUser) {
        if (existingUser) {
          req.session.user = existingUser;
          return res.redirect('/');
        }

        var user = new User({
          guid: guid,
          email: body.profile.emails[0].handle,
          profileImage: body.profile.image.imageUrl,
          firstName: body.profile.givenName,
          lastName: body.profile.familyName,
          accessToken: accessToken

        });

        user.save(function(err) {
          req.session.user = user;
          res.redirect('/');
        });
      });
    });
  });
});

app.use(express.static('static'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
