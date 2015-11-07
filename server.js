var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname +'/public'));
//morgan pour le log - Morgan is used for logging request details.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
// permet de parser le json
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.listen(3000);
console.log('l\'app écoute sur le port 3000');