var fs = require('fs');
var path = require('path');

// init project
var express = require('express');
var bodyParser = require('body-parser');
var CFonts = require('cfonts');
var figlet = require('figlet');

var Colors = require('./lib/styles/Colors');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.get("/ascii/font", function(request, response) {  
  var text = request.query.text;
  var numLines = Number.MAX_VALUE;
  var prettyText = {};
  
  if(text.length == 0) {
    response.send(Buffer.alloc(0));
    return;
  }
  
  for(var i = 0; i < text.length; i++) {
    try {
      prettyText = CFonts.render(text.substring(i), {
        font: "block",
        letterSpacing: 4,
        lineHeight: 0,
        maxLength: 0,
        space: false
      });

      if(prettyText.lines <= 1) {
        response.send(Buffer.from(prettyText.string));
        break;
      }
      
    } catch(err) {}
  }
});

app.post('/email', function(request, response) {
  console.log('writing email', request.body.email, 'to', process.env.EMAILS);
  fs.writeFile(process.env.EMAILS, request.body.email + "\r\n", {
    flag: 'a'
  }, function(err) {
    if(err) {
      console.log('failed to save email', err);
      response.sendStatus(500);
    } else {
      response.sendStatus(202);
    }
  });
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + process.env.PORT);
});
