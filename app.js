var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var passport = require('passport');
var flash    = require('connect-flash');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session      = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var config   = require('./config/db.js');
var contacts = require('./routes/contacts');
var counterparties = require('./routes/counter_parties');
var items = require('./routes/items');
var brands = require('./routes/brands');

require('./config/passport.js')(passport);
mongoose.connect(config.url,function(){
    console.log('connection established');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'ilovescotchscotchyscotchscotch',saveUninitialized: true,
    resave: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
//app.use('/', routes);
app.use('/users', users);
app.use('/contacts',contacts);
app.use('/counterparties',counterparties);
app.use('/',items);
app.use('/brand',brands);

/// catch 404 and forwarding to error handler
require('./routes/login')(app,passport);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
