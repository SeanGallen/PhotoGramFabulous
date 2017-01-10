const express = require('express');
const router = express.Router();

router.get('/albums', function(req, res) {
  res.render('albums');
})

module.exports = router;
