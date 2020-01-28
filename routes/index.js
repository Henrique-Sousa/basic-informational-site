var express = require('express');
var path = require('path');
var router = express.Router();

var rootDirectory = path.dirname(__dirname);

router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDirectory, '/index.html'));
});

router.get('/about', (req, res, next) => {
	res.sendFile(path.join(rootDirectory, '/about.html'));
});

router.get('/contact-me', (req, res, next) => {
	res.sendFile(path.join(rootDirectory, '/contact-me.html'));
});

router.get("*", (req, res, next) => {
    res.sendFile(path.join(rootDirectory, '/404.html'));
});

module.exports = router;