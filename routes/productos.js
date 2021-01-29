
var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");



/* GET home page (productos.ejs). */
router.get('/', function(req, res, next) {

   db.query("SELECT * FROM games where status=1", function(err,resultados){
      console.log(resultados);
      res.render('productos', { title: 'Videogames', Games:resultados });
    });

    
  });

//Consulta
router.post('/', function (req, res, next) {
  const { title } = req.body;
  db.query("SELECT * FROM games WHERE title like '%" + title + "%' and status = '1' order by recomendation desc", function(err,resultados){
    if (err) {
      res.send('error en la consulta');
      return;
    }
    if (resultados.length > 0) {
      res.render('productos', { Games:resultados });
      console.log(resultados);
    } else {
      res.send('No existe el nombre del juego ingresado');
    }
    console.log(resultados);
  });
});


module.exports = router;




