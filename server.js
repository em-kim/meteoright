var express = require("express");
var app = express();
var path = require('path');
app.use(express.static('public'));

//app.use(express.static(path.join(__dirname, './meteoright')));
 /* serves main page
 app.get("/", function(req, res) {
    res.sendfile('./templates/index.htm')
 });*/
 app.get("/spaceDog", function(req, res) {
    res.sendfile('./templates/spaceDog.html')
 });
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});