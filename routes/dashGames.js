var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/*El estatus 1 significa autorizado*/ 
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM games WHERE status = '1' order by recomendation desc", function(err,resultados){
    console.log(resultados);
    res.render('dashGames', { Games:resultados });
  });
});

module.exports = router;
