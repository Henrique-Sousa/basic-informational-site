var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
	res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(8080);
