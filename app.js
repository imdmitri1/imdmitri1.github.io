var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", function(req, res){
  res.render("index");
});

app.get("*", function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP);
// app.listen(3000, function(){
//   console.log("running")
// })
