
//**** THIS IS WHAT BCRYPT */

// req.body.password
// password + salt // salt is a random string

const crypto = require('crypto') // used to create a salt
const pbkdf2 = require("pbkdf2") // allows us to has a string

let password = "password1"

let salt = crypto.randomBytes(20).toString("hex")

// takes password, salt, number of iterations, 256 (length of key), SHA256
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, "sha256") // encrypted and hashed

let hash = key.toString("hex") 

// console.log(hash)

// login with password
// re-encrypt password
// compare to hash in our db

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}` // store in db
// console.log(stored_pass)


//************* */

// figure out if password entered on front-end matches original password
let loginPassword = "password1"

// retrieve password from db based on username
let pass_parts = stored_pass.split('*')

// console.log('pass_parts', pass_parts);

let keyNewLogin = pbkdf2.pbkdf2Sync(
  loginPassword, 
  pass_parts[2], 
  parseInt(pass_parts[1]),
  256,
  'sha256'
  )

  let hashLoginPassword = keyNewLogin.toString('hex')

  if(hashLoginPassword === pass_parts[3]){
    console.log('passwords match')
  }
  else{
    console.log('wrong password')
  }