var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('game', { title: 'BeRD - Game' });
});

module.exports = router;
