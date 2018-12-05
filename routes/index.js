var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'berd' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'berd - Resume' });
});

module.exports = router;
