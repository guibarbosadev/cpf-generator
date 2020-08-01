const express = require('express');
const hbs = require('hbs');
const path = require('path');

const CPFHelper = require('./cpf');

const app = express();
const port = process.env.PORT || 3000;
const pagesDir = path.join(__dirname, './pages');

app.use(express.static('./public'));
app.set('view engine', 'pug');
app.set('views', pagesDir);

app.get('/', function (_req, res) {
    const CPF = CPFHelper.generateCPF();
    const CPFWithMask = CPFHelper.maskCPF(CPF);

    res.render('index', { CPF, CPFWithMask });
});

app.get('/api', function (_req, res) {
    const CPF = CPFHelper.generateCPF();
    const maskedCPF = CPFHelper.maskCPF(CPF);
    
    res.json({
        cpf: CPF,
        withMask: maskedCPF
    });
});

const listener = app.listen(port, function (_req, _res) {
    console.log(`Listening on port ${port}`);
});
