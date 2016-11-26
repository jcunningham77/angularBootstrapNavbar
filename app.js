 var express = require('express');
 
 
var app =express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000;
var ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

app.use('/assets/',express.static(__dirname+'/public'));

console.log('ip = ' + ip);
console.log('port = ' + port);
app.listen(port, ip,function(){
     console.log(new Date() + ' Server is listening on port 8080');
});