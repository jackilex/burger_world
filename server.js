//1)set up port/server connection
//2) set express-handlebars--> create view folder (layouts/main,index.handlebars)
//3) set up routes --> create route folder-->move routes to route folder
//4) set mysql connection--> create folder and move to config folder
//4)create db  folder (schema+seeds) and set -->database on mysql workbench

const express = require('express');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();


app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


//routes
app.get('/', function (req, res) {
    res.render('index',{names:{name: "Alex S"}});
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });