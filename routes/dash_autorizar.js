const { request } = require('express');
var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

router.get('/:id_game', function(req, res, next) {
    const { id_game } = req.params;
    db.query("UPDATE games SET status='1' WHERE id_game = ?", [id_game] ,function(err, resultados){
        res.redirect('/dash_index');
        console.log( id_game );
        console.log( resultados );
      });
  });
  
  module.exports = router;
  