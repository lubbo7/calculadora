var express = require ('express');
var app = express();

app.get('/', (rep, res) => {
    res.end('Holis');
});

app.listen(3000);