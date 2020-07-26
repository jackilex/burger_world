//1)set up port/server connection
//2) set express-handlebars--> create view folder (layouts/main,index.handlebars)
//3) set up routes --> create route folder-->move routes to route folder
//4) set mysql connection--> create folder and move to config folder
//4)create db  folder (schema+seeds) and set -->database on mysql workbench

const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.static(__dirname + '/public'));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

//all routes
const routes= require("./controllers/burgers")
app.use("/",routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });