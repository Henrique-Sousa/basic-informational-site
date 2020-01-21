var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res) {
	let availableUrls = ['/', '/about', '/contact-me'];
	let inputUrl = url.parse(req.url, true);
	let path = inputUrl.pathname;	
	if (availableUrls.includes(path)) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		if (path === '/') {
			var fileName = 'index.html';
		} else {
			var fileName = path.replace('/', '') + '.html';
		}
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		var fileName = '404.html';
	}
	fs.readFile(fileName, function(err, data) {
		if(err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('404.html');
		} else {
			res.end(data);
		}
	})
}).listen(8080);