const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../app/models/user');
const db = require('../config/db');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = db.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({id: jwt_payload.id}, (err, user) => {
      if (err) { return done(err, false); }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
