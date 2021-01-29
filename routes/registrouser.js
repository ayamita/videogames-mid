var express = require('express');
var router = express.Router();

/* GET home page (nosotros.ejs). */
router.get('/', function(req, res, next) {
    res.render('registrouser', { title: '' });
  });

module.exports = router;
