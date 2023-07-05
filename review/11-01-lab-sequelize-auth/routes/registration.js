
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../models')

router.get('/registration', (req,res) => {

    res.render('registration')
})

router.post("/registration", async (req, res) => {
    console.log('inside registration post route')
    try {
        // scrape form info from header
        let {username, email, password} = req.body

        console.log(username)
        // encrypt password
        password = bcrypt.hashSync(password, 8)
        
        console.log(username, email, password)

        // save form info to db
        // assume all users are Basic
        let insertResult = await db.users.create({
            username,
            email,
            password,
            roleName: 'Basic'
        })

        // on success, redirect user to login page
        res.redirect('/login')

    } catch (error) {
        // on error, navigate to error page
        console.log("error: ", error)
        res.render('registration', {
            error: "error: can't register this username"
        })
    } 
})

module.exports = router;
