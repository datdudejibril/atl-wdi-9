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
    rres.render("topping.hbs");
});

app.get('/index/:type', function(req, res, next) {
    console.log(req.params);
    res.render("index.hbs");
});
app.get('/order/:type', function(req, res, next) {
    console.log(req.params);
    res.render("order.hbs");
});

















// assigning 3000 as our port
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

