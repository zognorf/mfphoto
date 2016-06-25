var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log('Server started');
  console.log('listening on port', PORT);
});
