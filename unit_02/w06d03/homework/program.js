
//Level 1 "Hello World"

// package
 var express = require('express')

 // settings for app
    var app = express()
 // homepage route
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
 //listening port
    app.listen(process.argv[2])

//Level 2 Static

// package
  // var express = require('express')
  // settings for app
  // var app = express()
// homepage route
  // app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
//listening port
  // app.listen(process.argv[2])

  //Official solution does with   var express = require('path') does not past verify test

  //Level 3 Good Ol Form


// // package
//   var express = require('express')
//   // settings for app
//   var app = express()
// //To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded() middleware from the body-parser module.
//   var bodyparser = require('body-parser')
//   Express.js uses middleware to provide extra functionality to your web server.
// // Simply put, a middleware is a function invoked by Express.js before your own
// // request handler.
//   app.use(bodyparser.urlencoded({extended: false}))
// // Write a route ('/form') that processes HTML form input
// // (<form><input name="str"/></form>) and responds with the value of str backwards.

//   app.post('/path', function(req, res){
//     req.body.str.split('').reverse().join('')

//    })



//CANT FINISH LAST 3 TASKS.  I GET GETTING THIS ERRO
// macbook:homework (master *%)$ expressworks verify program.js
// events.js:161
//       throw er; // Unhandled 'error' event
//       ^

// Error: listen EADDRINUSE :::2505
//     at Object.exports._errnoException (util.js:1023:11)
//     at exports._exceptionWithHostPort (util.js:1046:20)
//     at Server._listen2 (net.js:1261:14)
//     at listen (net.js:1297:10)
//     at Server.listen (net.js:1375:9)
//     at Function.listen (/Users/macbook/Desktop/ga/atl-wdi-9/node_modules/express/lib/application.js:618:24)
//     at Object.<anonymous> (/Users/macbook/Desktop/ga/atl-wdi-9/unit_02/w06d03/homework/program.js:51:7)
//     at Module._compile (module.js:571:32)
//     at Object.Module._extensions..js (module.js:580:10)
//     at Module.load (module.js:488:32)
// ✗ Error connecting to http://localhost:2505/home: connect ECONNREFUSED 127.0.0.1:2505


//listening port
  app.listen(process.argv[2])


