var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET home page (nosotros.ejs). */
router.get('/', function(req, res, next) {
    res.render('recomendacion', { title: '' });
  });

  router.post('/', function (req, res, next) {
    var registro = {
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo
    };
    db.query('insert into games set ?',registro, function (error, resultado) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(registro);
    });
    res.redirect('productos');
    console.log('La carga se efectuo correctamente');
  });



module.exports = router;








