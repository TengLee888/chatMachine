var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {
	//get參數
	// console.log(req.query['hub.challenge']);
	//post參數
	// console.log(req.body.name);

	res.send(req.query['hub.challenge']);
});

app.post('/', function (req, res) {
	//get參數
	// console.log(req.query.name);

	//post參數
	console.log(req.body);

	var userID = req.body.entry[0].messaging[0].sender.id;
	var message = req.body.entry[0].messaging[0].message.text;
	var url= "https://graph.facebook.com/v2.6/me/messages?access_token=EAAbyth38ShwBAEaSg1jSFGSieFhP9ZAsoabDU3SHGjZBumFZCzp1BPECj7wNl2rZAnzLz8WRivIbVRGkggY6GcpccpUOHzZBJNVuqBdkj0SR3zcCkNbIyhzPEXy1kScFWqKTFXZBvg54SbGSoQF3LTvQZAN6sBvZAkMoybDrbWR9cgZDZD";
	var data = {
		"recipient": {
			"id": userID,
		},
		"message": {
			"text": message + 'hahaha',
		}
	};
	//send request to url with data { receiver, message}
	request({
		url: url,
		method: 'post',
		json: data
	}, function(){
		res.send('');
	});

	// res.send('');
});

// app.get('/name', function (req, res) {
// 	//get參數
// 	console.log(req.query.name);
// 	res.send('Hello name!');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
