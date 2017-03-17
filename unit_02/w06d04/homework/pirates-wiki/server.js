//your code here
//your code below
/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
//var piratesController = require('/controllers/pirates.js');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

// Does req.body exist without body-parser? Well no. body-parser adds in an empty body object to the request object that can later be populated with data. You can test the existence of req.body by console.logging req with and without body-parser.

// You will need to set up body-parser in your server.js.

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);



var port = process.env.PORT || 3000; // tells the server where to listen for requests
app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above
