
const express = require('express');
const cookieSession = require('cookie-session')
const app = express();

// validating cookie info
app.use(cookieSession({
  name: 'session', 
  keys: ['keyForCookieSession'],
  maxAge: 14 * 24 * 60 * 60 * 1000 // in milliseconds
}))

app.get('/', (req, res) => {
  
  let fName = "Stephen"

  // place on session
  req.session.fName = fName

  res.send('home page')
})

app.get('/faq/:name', (req, res) => {
  
  req.session.fName = req.params.name

  res.send('home page')
})

app.get('/about', (req, res) => {

  console.log(req.session.fName)

  res.send(`${req.session.fName}`)
})

app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})