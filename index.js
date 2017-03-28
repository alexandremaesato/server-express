var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


var empresa1 = {
	nome: "nome da empresa 1",
	descricao: "Essa eh a empresa 1",
	fotos: [
		{url: "http://www.gazetadopovo.com.br/ra/mega/Pub/GP/p4/2017/03/27/Economia/Imagens/Cortadas/6687383-kEiG-U201731324862MvF-1024x683@GP-Web.jpg"}
	]
}

var empresa2 = {
	nome: "nome da empresa 2",
	descricao: "Descricao da empresa 2 como de costume",
	fotos: [
		{url: "https://startupi.com.br/wp-content/uploads/2016/07/grandes-empresas-600x250.jpg"},
		{url: "https://startupi.com.br/wp-content/uploads/2016/07/grandes-empresas-600x250.jpg"}
	]
}

var empresas = [];
empresas.push(empresa1);
empresas.push(empresa2);

app.get('/empresas', function (req, res) {
  res.json(empresas);
});


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


