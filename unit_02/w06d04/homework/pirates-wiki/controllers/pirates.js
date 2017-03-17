/requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function(req, res){
  res.render('/index', {
        index: data.name
    });
});

// Make a new route. All this should do is render the new view, you don't need to pass it data.

//new pirate
router.get('/new', function(req, res){
  res.render('/new');
});




// CREATE and req.body

// Make a create route.

// URI convention for create: POST /
// This will add the data from new into the Pirates array, and redirect to the index. The data will come from the request object-- inside an object called req.body. Does req.body exist without body-parser? Well no. body-parser adds in an empty body object to the request object that can later be populated with data.

//create pirate

router.post('/', function(req, res){
    var newPirate = {
        name: req.body.name,
    };

console.log(newPirate);
    data.name.push(newPirate);
    res.redirect('/');
    // res.send("Create a new todo is working!");



//exports
module.exports = router;
