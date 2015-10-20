// core modules and config
var path = require('path');
var config = require('./config');

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./users/routes');
var session = require('express-session');

// db
var mongoose = require('mongoose');
mongoose.connect(config.dbPath);

app.use(session({
  secret: 'secret'
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  './client/public'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require('./auth.js')(app);
app.get('/', function(req, res) {
  res.render('index', {user : JSON.stringify(req.user)});
});

app.use(express.static(path.join(__dirname, './client/public')));
app.use('/users', userRouter);


// start it up
app.listen(config.port);
console.log('agnition is listening on port ' + config.port + " " + process.env.ENV);

module.exports = app;
