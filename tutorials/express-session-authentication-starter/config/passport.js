const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const validPassword = require("../lib/passwordUtils").validPassword

const customFields = {
  usernameField: "uname",
  passwordField: "pw"
}

const verifyCallback = (username, password, done) => {
  User.findOne({ username })
    .then(user => {
      
      if (!user){ // if no user is found in db
        return done(null, false)
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if(isValid){ 
        return done(null, user)
      }
      else{
        return done(null, false)
      }
    })
    .catch(err => {
      done(err)
    })
} 

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  console.log("user serialized: userId added to req.session")
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  console.log("user deserialized: user added to req.user")
  User.findById(userId)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
})