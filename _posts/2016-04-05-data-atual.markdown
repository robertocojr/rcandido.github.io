---
published: true
title: Data Atual
layout: post
---
- Primeiramente vamos criar uma pasta para montar nosso projeto, eu utilizei o nome "currentDate".

Vamos utilizar 2 recursos o node, o Request para executar o GET e o Express, para isso execute os comandos abaixo:

- Execute o comando "npm install request -s"
- Execute o comando "npm install express -s"

{% highlight javascript %}
var request = require('request');
var express = require('express');
var app = express();


// Definir a route principal
app.get('/', function(req, res) {
    request({
      url: 'http://api.timezonedb.com/?zone=America/Sao_Paulo&format=json&key=S04JEN9VRZBA',
      method: 'GET'
    }, function (err, res, body) {
          console.log("status: " + res.status);
          console.log("timestamp: " + res.timestamp);
          if (!err && res.statusCode == 200) {
              console.log(body);
          } else {
            console.log(err);
          }
    });

});

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(3000);

{% endhighlight %}