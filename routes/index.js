var express = require('express');
var path = require('path');
var router = express.Router();

var rootDirectory = path.dirname(__dirname);
var htmlDirectory = path.join(rootDirectory, 'html');

router.get('/', (req, res, next) => {
	res.sendFile(path.join(htmlDirectory, 'index.html'));
});

router.get('/about', (req, res, next) => {
	res.sendFile(path.join(htmlDirectory, 'about.html'));
});

router.get('/contact-me', (req, res, next) => {
	res.sendFile(path.join(htmlDirectory, 'contact-me.html'));
});

module.exports = router;