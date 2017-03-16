
// 1 "Hello World"

// package
 // var express = require('express')

 // // settings for app
 //    var app = express()
 // // homepage route
 //    app.get('/home', function(req, res) {
 //      res.end('Hello World!')
 //    })
 // //listening port
 //    app.listen(process.argv[2])

// 2 Static

// package
  // var express = require('express')
  // settings for app
  // var app = express()
// homepage route
  // app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
//listening port
  // app.listen(process.argv[2])

  //Official solution does with   var express = require('path') does not past verify test

  // 3 Good Ol Form


// // // package
//   var express = require('express')
// //   // settings for app
//   var app = express()
// // //To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded() middleware from the body-parser module.
//   var bodyparser = require('body-parser')
// //   Express.js uses middleware to provide extra functionality to your web server.
// // // Simply put, a middleware is a function invoked by Express.js before your own
// // // request handler.
//   app.use(bodyparser.urlencoded({extended: false}))
// // // Write a route ('/form') that processes HTML form input
// // // (<form><input name="str"/></form>) and responds with the value of str backwards.

//   app.post('/form', function(req, res){
//     //res.body.str.split('').reverse().join('');
//     res.send(req.body.str.split('').reverse().join(''));
//   // });
//    })
// //listening port
//   app.listen(process.argv[2])


//  6 Param Pam Pam

// // // // package
//   var express = require('express')
// // //   // settings for app
//   var app = express()

// //Route
  // app.put('/message/:id', function(req, res) {
  //           var id = req.params.id;
  //           var str = require('crypto')
  //           .createHash('sha1')
  //           .update(new Date().toDateString() + id)
  //           .digest('hex')

  //           res.send(str);
  //         })

// //listening port
  // app.listen(process.argv[2])


/// 7 What's in Query

// // // package
  var express = require('express')
// //   // settings for app
  var app = express()

  app.get('/search', function(req, res) {
    var query = req.query
    res.send(query);
});

// //listening port
  app.listen(process.argv[2])
