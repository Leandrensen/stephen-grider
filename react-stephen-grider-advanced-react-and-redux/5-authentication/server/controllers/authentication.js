const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const { token } = require('morgan');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  // user has already had their mail and passworf auth'd
  // we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  // see if a user with the given email exists
  try {
    const existingUser = await User.findOne({ email: email }).exec();

    // if a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // if a user with email does NOT exist, create and save user recotd
    const user = new User({
      email: email,
      password: password,
    });
    user.save().then(() => {
      // respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  } catch (err) {
    if (err) {
      return next(err);
    }
  }
};
