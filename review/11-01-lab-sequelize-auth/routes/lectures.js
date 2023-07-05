
const express = require('express');
const router = express.Router();
const auth = require("../auth")

router.get('/lectures', auth, (req, res) => {
  res.render('lectures')
})


module.exports = router;
