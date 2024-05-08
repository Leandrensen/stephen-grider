const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async function (
  email,
  password,
  done
) {
  try {
    // verify this username and password, call done with the user
    // if it is the correct username and password
    // otherwise, call done with false
    const existingUser = await User.findOne({ email: email }).exec();
    if (!existingUser) {
      return done(null, false);
    }

    // compare passwords - is 'password' = user.password ?
    existingUser.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, existingUser);
    });
  } catch (err) {
    return done(err, false);
  }
});

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  // see if the user ID in the payload exists in our databsae
  // if it does, call 'done' with that user
  // otherwise, call done without a user object
  try {
    console.log({ payload });
    const existingUser = await User.findById(payload.sub).exec();
    if (existingUser) {
      done(null, existingUser);
    } else {
      done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
