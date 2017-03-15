var express = require('express');
var app = express();
const Path = require('path');
// var session = require('express-session')
// var cookieParser = require('cookie-parser');




// app.use(session({secret: 'ssshhhhh'}));
// app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');	
// const config = require('../webpack.config.js');
// console.log(config);
// const compiler = webpack(config);

//app.use(express.static(__dirname + '/dist'));  
// app.use(webpackMiddleware(compiler));  
// app.use(webpackHotMiddleware(compiler));
// app.get('/', function (req, res) {
// 	console.log("this is get req")
//     	res.sendFile(Path.join(__dirname, '../index.html'));
//     });

 


// 
if (process.env.DEPLOY_MODE !== 'production') {
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');	
const config = require('../webpack/webpack-dev.config.js');
const compiler = webpack(config);
app.use(webpackHotMiddleware(compiler));
app.use(webpackMiddleware(compiler));
} else {
	app.use(express.static('../'));
    app.use(express.static(path.resolve(__dirname, '../dist')));
    app.get('*'), (req, res) => {
    	res.sendFile(path.join(___dirname, 'dist/index.html'));
    };	
}

// app.use(express.static('../'));
   
//     app.get('*'), (req, res) => {
//     	res.sendFile(path.join(___dirname, '../index.html'));
//     };

// app.get('/', function (req, res) {

//  res.end("Hello node server");
// })



//var server_port=process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var server_ip_address=process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

console.log("process.env.PORT",process.env.PORT)

var server = app.listen(process.env.PORT || 3000,function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("node server is running",host,port);
})