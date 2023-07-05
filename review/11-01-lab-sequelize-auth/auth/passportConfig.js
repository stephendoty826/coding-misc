
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const db = require('../models')

const init = (passport) => {
  // passport logic here

  // req => passport => protected pages => re.isAuthenticated()

  passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, done)=> {
    try{
      console.log(`inside passport.use() ${email} ${password}`)

      // take form data and validate user
      let records = await db.users.findAll({where: {email}}) // [{}, {}, {}]

      if(records){
        // a user was found in db
        records = records[0]

        // check/compare password
        bcrypt.compare(password, records.password, (err, match) => {

          if(match){
            console.log('password matched')
            return done(null, records)
          }
          else{
            // no match
            console.log("passwords didn't match")
            return done(null, false)
          }

        })
      }
      else{
        // no user in db
        return done(null, false)
      }
    }
    catch(err){
      return done(err)
    }

  }))

  // add user info to the session
  // user is the record passed from successful login (local strategy)
  passport.serializeUser((user, done) => {
    console.log('serializing user')
    done(null, user.id) // second argument is what we want on the session
  })

  // check if user is valid
  // grabbing session data from user cookie and decoding cookie with secret and being passed data (id)
  passport.deserializeUser(async (id, done) => {

    try {
      
      let foundUserInDBFromSessionData = await db.users.findByPk(id);

      if(foundUserInDBFromSessionData){
        done(null, foundUserInDBFromSessionData)
      }
      else{
        done(null, false)
      }
    } catch (error) {
      console.log(error)
    }

  })
}

module.exports = init