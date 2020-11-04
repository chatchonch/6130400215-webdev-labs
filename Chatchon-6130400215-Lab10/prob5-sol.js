var request = require('request');
var express = require('express');
var app = express();

request.get("https://httpbin.org/ip", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    var result = JSON.parse(body);
    
    var output = result.origin;

    app.get('/ip', function(req, res) {
        var ip = {'ip':result.origin};
        res.send(ip);
    });

    app.post('/ip', function(req, res) {
        res.send('Called API.');
    });

});

app.listen(3000);
