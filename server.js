var express = require('express');
var app =  express();
var PORT = 3000;

var middleware = require('./middleWare');

app.use(middleware.logger);

app.get("/hakkimda",middleware.requireAuthentication,function(req,res){
    res.send("Hakkımızda sayfasına hoşgeldiniz...");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log("Express server " + PORT +" nolu portta çalışıyor");
});