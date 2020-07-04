var express = require('express');
var CPFHelper = require('./cpf');
var app = express();

app.get('/', function (req, res) {
    const maskedCPF = CPFHelper.generateCPF(true);
    res.send(maskedCPF);
});

var listener = app.listen(3000, function (req, res) {
    const { port } = listener.address();
    console.log(`Listening on port ${port}`);
});
