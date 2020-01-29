var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();

app.use('/', indexRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '/404.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, console.log(`Server is listening at port ${port}.`));
