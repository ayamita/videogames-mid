var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");


 /* GET home page (index.ejs). */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 });

/* GET home page (nosotros.ejs). */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos' });
});

/* GET home page (login.ejs). */
router.get('/dash_login', function(req, res, next) {
  res.render('dash_login');
});

router.post('/dash_login', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  if (email && password) {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err,resultados){
      if(resultados.length > 0){
        res.render('dash_index');
      }else{
        res.send('El correo o contraseña es incorrecto');
      }
      res.end();
      console.log(resultados);
    });
  }else{
    res.send('Favor de ingresar correo y contraseña');
    res.end();
  }

});



module.exports = router;
