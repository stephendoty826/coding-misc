const express = require('express')
const helmet = require('helmet');
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./auth/passportConfig')(passport); // passing one global instance of passport to config file and invoking function
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(helmet())
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cookieSession({
    name: 'session', 
    keys: ['keyForCookie'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use(passport.initialize())
app.use(passport.session())

//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/lectures.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))
app.use(require('./routes/roster.js'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})