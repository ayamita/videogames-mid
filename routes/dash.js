var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET home page (dash_index.ejs). */
router.get('/', function(req, res, next) {
    res.render('dashIndex');
   });
module.exports = router;
