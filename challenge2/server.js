var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "jpmfic6bzhhzeyjd", //Your username//
    password: "az0rql713ckr5hef", //Your password//
    database: "jycxtsgajvvqqqrx"
})

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    
})

var app = express();

app.use(express.static('public'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('people/index');
})

app.get('/users/sign-in', function(req, res){
	res.render('users/sign_in');
})

app.get('/users/new', function(req, res){
	res.render('users/new');
})

app.get('/users/sign-out', function(req, res){
	res.render('/');
})

app.post('/people/create', function(req, res){
	console.log(req.body);
	res.send(req.body);
})

app.post('/users/create', function(req, res){
	console.log(req.body);
	res.render('people/index');
})

app.post('/users/login', function(req, res){
	console.log(req.body);
	res.render('people/index');
})

app.post('/people/:name/tasks/create', function(req, res){
	console.log(req.body);
	res.send(req.body);
})

var port = process.env.PORT || 3000;

app.listen(port);