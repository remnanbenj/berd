var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('projects', { title: 'BeRD - Projects' });
});

module.exports = router;
