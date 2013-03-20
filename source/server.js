var express = require('express');
var search  = require('./route/search');
var node    = express();

node.use(express.bodyParser());
node.use('/', express.static(__dirname + '/static'));

node.post('/searches', search.create);
node.get('/searches/:id', search.read);

var port = 3000;

node.listen(port);

console.log('Listening on port ' + port);