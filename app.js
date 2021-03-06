var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var dashIndex = require('./routes/dash');
var dashLogin = require('./routes/dashLogin');
var dashPendientesAutorizar = require('./routes/dashPendientesAutorizar');
var dashGames = require('./routes/dashGames');
var registrouserouter = require('./routes/registrouser');
var recomendacionuserouter = require('./routes/recomendacion');
var userLogin = require('./routes/user_login');
var usersearch = require('./routes/searchuser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/dashLogin', dashLogin);
app.use('/dashIndex', dashIndex);
app.use('/dashPendientesAutorizar', dashPendientesAutorizar);
app.use('/dashGames', dashGames);
app.use('/registrouser', registrouserouter);
app.use('/recomendacion', recomendacionuserouter);
app.use('/user_login', userLogin);
app.use('/searchuser', usersearch);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
