var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET home page (login.ejs). */
router.get('/', function(req, res, next) {
  res.render('dashGames');
});

module.exports = router;
