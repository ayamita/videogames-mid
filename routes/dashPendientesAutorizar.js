var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET home page (dash_index.ejs). */
/*El estatus 0 significa pendiente por autorizar*/
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM games WHERE status='0'", function(err,resultados){
    console.log(resultados);
    res.render('dashPendientesAutorizar', { title: 'Videogames', Games:resultados });
  });
});

/*El estatus 1 significa autorizado*/
router.get('/autorizar/:id_game', function(req, res, next) {
  const { id_game } = req.params;
  db.query("UPDATE games SET status='1' WHERE id_game = ?", [id_game] ,function(err, resultados){
      res.redirect('/dashPendientesAutorizar');
  });
});

/*El estatus 2 significa rechazado*/
router.get('/rechazar/:id_game', function(req, res, next) {
  const { id_game } = req.params;
  db.query("UPDATE games SET status='2' WHERE id_game = ?", [id_game] ,function(err, resultados){
      res.redirect('/dashPendientesAutorizar');
  });
});
module.exports = router;
