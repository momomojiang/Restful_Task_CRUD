var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
// var assert = require('assert')
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const flash = require('express-flash');
app.use(flash());
var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

require('./routes')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});