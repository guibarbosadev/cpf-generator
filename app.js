var express = require('express');
var CPFHelper = require('./cpf');
var app = express();

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    const CPF = CPFHelper.generateCPF(false);
    const maskedCPF = CPFHelper.maskCPF(CPF);
    
    res.json({
        cpf: CPF,
        withMask: maskedCPF
    });
});

const listener = app.listen(port, function (req, res) {
    console.log(`Listening on port ${port}`);
});
