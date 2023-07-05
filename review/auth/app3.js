const express = require('express');
const helmet = require('helmet')
const app = express();

// MIDDLEWARE
// req => middleware (express) => res 

/**
 * [
 *  public,
 *  helmet
 * app.all('/')
 * ['/', '/about']
 * app.use()
 * 
 * ]
 * 
 */

app.use(express.static('public'))

app.use(helmet())

app.all('/', (req, res, next) => {
  
  console.log('log some data')

  next()
})

const authLogin = (req, res, next) => {

  let passwordIsValid = false;

  if(passwordIsValid){
    console.log('checking password')
    next()
  }
  else{
    // res.redirect('/error')
    next(new Error('there was an error'))
  }
}

app.get('/', authLogin, (req, res) => {

  console.log('inside normal route')

  res.send('home')
})

app.use((err, req, res, next) => {

  console.log(err)

  console.log('error has occurred')

  res.send('There was an error. Wrong password')
})

// app.get('/error', (req, res) => {
//   res.send('an error occurred')
// })

app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})