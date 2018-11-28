var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('professional', { title: 'BeRD - Professional' });
});

module.exports = router;
