// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

// Make a GET route for /topping that has 1 variable destination for the type of topping. When a user visits this route on localhost:3000/topping/pepperoni, they will see the string "pepperoni pizza! Good choice." The syntax for the route will look like this:

app.get('/topping/:type', function(req, res, next) {
    console.log(req.params);
    res.send(`${req.params.type}!, pizza!  Good choice.`);
});

app.get('/order/:amount/:size', function(req, res, next) {
  console.log(req.params);
   res.send(`Your order for ${req.params.amount} ${req.params.size} will be ready in 1 minute.`);
});

app.get("/test/:someValue", function(req, res, next){
  res.render("index.hbs", {
    message: req.params.someValue
  });
});
















// assigning 3000 as our port
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

