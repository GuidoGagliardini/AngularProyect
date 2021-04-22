var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session= require('express-session');
const favicon = require('express-favicon');
const cors = require ('cors');
const fs = require ('fs');
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv');
const mw = require ('./utils/middleware');


dotenv.config();



/** RUTAS */
var indexRouter = require('./routes/index');




const perfiladmin = require('./routes/perfiladmin');
const adminsiniestros  = require('./routes/adminsiniestros');
const admincotizaciones = require('./routes/admincotizaciones');


const siniestroRouter= require('./routes/siniestro');
const auth = require ('./routes/auth');
const cotMail = require('./routes/cotMail');
const seguros = require ('./routes/seguros');
const recoveryRouter = require ('./routes/recovery');
const changeRouter = require ('./routes/change');
const verifyRouter = require ('./routes/verify');


const contacto = require ('./routes/contacto');


const mailcontacto = require ('./routes/mailContacto');
const mailSeguros = require ('./routes/mailseguros');
const usersRouter = require('./routes/users');
// RutasAdmin




var app = express();

// CORS POLICY
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(__dirname + '/images/logoseguros'));



app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/perfiladmin', mw.securedAdmin,perfiladmin);
app.use('/adminsiniestros', adminsiniestros);
app.use('/admincotizaciones', admincotizaciones);


app.use('/recovery',recoveryRouter);
app.use('/change', changeRouter);
app.use('/verify', verifyRouter);
app.use ('/auth',auth);
app.use('/cotMail', cotMail);
app.use('/seguros', seguros);



app.use ('/contacto', contacto);
app.use ('/mailContacto', mailcontacto);
app.use ('/mailseguros', mailSeguros);
app.use('/siniestro', siniestroRouter);




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

console.log ('conectado a base de datos '  + process.env.DB_NAME);

module.exports = app;
