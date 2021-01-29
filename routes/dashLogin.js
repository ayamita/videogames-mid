var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");

/* GET home page (login.ejs). */
router.get('/', function(req, res, next) {
  res.render('dashLogin');
});

/* POST home page (login.ejs). */
router.post('/', function(req, res, next) {
    const { email, password } = req.body;
    const datos = {
        email,
        password
    }
    if (email && password) {
        db.query('SELECT * FROM users WHERE email = ? AND password = ?', [datos.email, datos.password], function(err,resultados){
            if(resultados.length > 0){
                res.redirect('dashIndex');
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
