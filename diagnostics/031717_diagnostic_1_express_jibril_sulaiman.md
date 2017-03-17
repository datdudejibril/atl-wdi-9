# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

--Client, Request, Server, Response.  It shows how computers communicate with each other.

### Question 2: What are the differences between a GET request and a POST request?
--Get retreives data.  Post sends data to the server.

### Question 3: What does `npm init` do?
--Installs dependancies packages.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
--Create, Read, Update, Delete.
--Post, Get, Put, Delete
### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?
Post
### Question 6: If the following form was submitted, what would `action="myScript.js"` do?
--Posts name data to myScripts.js
```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
app.post('/menus', function(req, res){
  res.redirect('/homepage');
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

--var id = req.params.id;
--var songId = req.params.song_id;

```
app.get('/artist/:id/song/:song_id'), function(req, res){
  //hmm...
}
```

### Question 9: What is MVC? How have we been using it so far?
--Model, View, Controller

--To view data and route to data stored in the js files.  We haven't viewed data in a database yet using MVC

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

app.get('/products', function(req,res){
  res.json({error: "Bad Request"})
});
