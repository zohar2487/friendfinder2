var path = require("path");

 module.exports = function(app) {
    app.get("/", function(req, res){
        console.log(path.join(__dirname + "/../public/home.html"));
         res.sendFile(path.join(__dirname + "/../public/home.html"));
     });
     
 };