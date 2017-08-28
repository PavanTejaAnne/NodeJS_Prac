var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine","ejs");

var friends = ['bob', 'mark', 'diana', 'nathan'];

app.get("/", function(req,res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends",{friends:friends});
    
});

app.post("/addfriend", function(req,res){
    var newfriend = req.body.newFriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("*", function(req,res){
    res.send("Check your url bro.")
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server is listening");
});