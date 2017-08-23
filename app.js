var request = require('request');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(req.query['hub.challenge']);
});


app.post('/', function (req, res) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages?access_token=EAAPXVUe0LloBAG1V3O3idYB6ZA9gLqsDZAHUwyoiXbPfrc0cZA3eOnmySLRS3OuixN9DWao8Xsit5bu50T3ThdiWqSthBFsjzj1LES5h057mZARQYr9knI8PMGkxHrtlVgOObhFvnW4DkAwnat8kkXzBVZC1TOZAZBQoGJKCDQCMQZDZD",
    method: "POST",
    json: {
      "recipient": {
        "id":1323315327724011
      },
      "message": {
        "text": "Teng is HANDSOME!!"
      }
    }
  })
  res.sendStatus(200);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
