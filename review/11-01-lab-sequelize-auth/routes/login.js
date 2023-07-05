const express = require('express');
const passport = require('passport')
const router = express.Router();

router.get('/login', (req,res) => {

    res.render('login')
})


router.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

// router.post('/login', (req, res) => {
    // scrape info from header

    // check if user is in db

    // check if password is correct for user
        // compare encrypted password
    // place data on session so login is persisted
// })
    
    




module.exports = router;