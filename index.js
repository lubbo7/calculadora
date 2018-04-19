var express = require ('express');
var app = express();

app.get('/', (rep, res) => {
    res.end('Holos');
});

app.listen(3000);