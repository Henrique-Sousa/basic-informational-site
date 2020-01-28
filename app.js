var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();

app.use('/', indexRouter);

var port = process.env.PORT || 8080;
app.listen(port, console.log(`Server is listening at port ${port}.`));
