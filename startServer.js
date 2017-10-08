/*var http = require('http');
var url = require('url');
var fs = require('fs'); */
var express = require("express");
var app = express();
app.use(express.static("./"));
app.listen(80);
/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url,true);
	var fileName = "."+q.pathname;
	fs.readFile(fileName, function (err,data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write("ERROR 404 brat");
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
		}
		return res.end();
	});
}).listen(8080); 
*/