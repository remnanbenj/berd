var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'BeRD' });
});

/* GET resume page. */
router.get('/resume', function(req, res) {
  res.render('resume', { title: 'BeRD - Resume' });
});

module.exports = router;
