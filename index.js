var express = require('express');
var bookApp = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var dbConnection = require('./dbConfig/dbConfig');
var BookRoute = require('./routes/books');
var port = 8080;

mongoose.connect(dbConnection);

bookApp.use(bodyParser.json());
bookApp.use(bodyParser.urlencoded({
    extended: true
}));

bookApp.use( express.static(__dirname + '/public') );
bookApp.use( '/public', express.static(__dirname + '/public') );

bookApp.use('/api/books', BookRoute);

bookApp.get('/', function( req, res ){
    //res.send('Happy to be here');
    res.sendFile( path.join( __dirname + "/public/index.html" ) );
});

bookApp.listen( port, function(){
    console.log("***********************************************************************");
    console.log(" Server listening on port : " + port );
    console.log("***********************************************************************");
});
