// Pasha Pourmand
// Sept 1, 2016
var express = require('express');
var app = express();
var router = express.Router();
var session = require('express-session');
var path = __dirname + '/views/';
var YahooStrategy = require('passport-yahoo-oauth');
var passport = require('passport'), YahooStrategy = require('passport-yahoo-oauth').Strategy;
var yahooConsumerKey = 'dj0yJmk9MnlNUTNNZzhjTGpNJmQ9WVdrOWFVeHFVMVJ4TkhVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0zMg--';
var yahooConsumerSecret = '8c7fc130352fabcbee34f89c60f01a6d06dcb79b';

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: yahooConsumerSecret
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('static'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

passport.use(new YahooStrategy({
    consumerKey: yahooConsumerKey,
    consumerSecret: yahooConsumerSecret,
    callbackURL: "https://footballtoolkit.herokuapp.com/auth/yahoo/callback"
  },
  function(token, tokenSecret, profile, done) {
    var data = profile._json;

    var userObj = {
      id: profile.id,
      name: data.profile.nickname,
      avatar: data.profile.image.imageUrl,
      dateJoined: new Date().getTime(),
      lastUpdated: new Date().getTime(),
      lastVisit: new Date().getTime(),
      accessToken: token,
      tokenSecret: tokenSecret,
      sessionHandle: profile.oauth_session_handle
    };
    return done(null, userObj);
  }
));

app.get('/auth/yahoo', passport.authenticate('yahoo'));

app.get('/auth/yahoo/callback', passport.authenticate('yahoo', { failureRedirect: '/' }), function(req, res) {
  res.redirect('/');
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
