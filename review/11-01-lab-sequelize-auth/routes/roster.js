const express = require('express');
const router = express.Router();
const db = require('../models')
const auth = require('../auth')

router.get('/roster', auth, async (req,res) => {

  let record = await db.users.findByPk(req.user.id )

  if(record.roleName === "Admin"){
    res.render('roster', {username: req.user.username})
  }
  else{
    res.redirect('/')
  }

})

module.exports = router;