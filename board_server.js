//standard express setup

var express=require('express');
app = express();
path = require('path');
//npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
//npm install ejs (can use other engines)
app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');

require('./server/config/routes.js');

app.listen(8001, function() {});
