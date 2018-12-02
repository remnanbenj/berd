var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'BeRD' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'BeRD - Resume' });
});

router.get('/phone', function(req, res) {
  res.render('phone', { title: 'BeRD' });
});

module.exports = router;
