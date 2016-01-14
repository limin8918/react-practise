var express = require('express'),
    app = express(),
    fs = require('fs');

app.listen(process.env.PORT);

app.use('/static', express.static(__dirname + '/../../public'));

app.get('/home', function (req, res) {
    res.send(fs.readFileSync(__dirname + `/../html/index.html`).toString())
});
