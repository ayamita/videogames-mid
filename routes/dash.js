var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");


/* GET home page (dash_index.ejs). */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM games", function(err,resultados){
    console.log(resultados);
    res.render('dash_index', { title: 'Videogames', Games:resultados });
  });

});

module.exports = router;
