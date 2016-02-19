var express = require('express');
var gpio = require("pi-gpio");

var app = express();

var port = process.env.PORT || 5050;

app.get('/gpio/:id', function (req, res) {
	//gpio/pin#?state=0 or 1

	var pin = req.params.id;
	var stat = req.query.state;
	gpio.open(pin, "output", function (err) {
		gpio.write(pin, state, function () {
			gpio.close(pin);
		});
	});
});

app.listen(port, function (err) {
	console.log('running server on port ' + port);
});