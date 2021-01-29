var express = require('express');
var router = express.Router();

/* GET home page (nosotros.ejs). */
router.get('/', function(req, res, next) {
    res.render('registrouser', { title: '' });
  });

  
  router.post('/alta', function (req, res, next) {
    var registro = {
      description: req.body.description,
      title: req.body.title,
      image: req.body.image
    };
    bd.query('insert into tblgames set ?', registro, function (error, resultado) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(registro);
    });
    res.render('mensajearticulos', { mensaje: 'La carga se efectuo correctamente', lista: registro });
    console.log('La carga se efectuo correctamente');
  });



module.exports = router;
