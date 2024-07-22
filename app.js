var express = require('express');
var control= require('./controller/control.js')

var app= express();

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.listen(3000);
console.log('listening')

control(app);
