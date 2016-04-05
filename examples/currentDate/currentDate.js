var request = require('request');
var express = require('express');
var app = express();


// Definir a route principal
app.get('/', function(req, res) {
    request({
      url: 'http://api.timezonedb.com/?zone=America/Sao_Paulo&format=json&key=S04JEN9VRZBA',
      method: 'GET'
    }, function (err, res, body) {

          if (!err && res.statusCode == 200) {
              console.log('Corpo:', body);
              console.log("status: " + body.status);
              console.log("timestamp: " + body.timestamp);
          } else {
            console.log(err);
          }
    });

});

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(3000);
