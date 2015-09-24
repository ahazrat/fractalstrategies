// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// set views engine and root folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// set routes
app.get('/', function(req, res) {
    res.render('index.');
});

app.listen(process.env.PORT, process.env.IP);
console.log('Asif: The <fractalStrategies> server is running.');