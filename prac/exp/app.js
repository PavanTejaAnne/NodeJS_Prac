var express = require("express");
var app = express();

app.use(express.static("public")); //to use css stuff
app.set("view engine", "ejs"); // to skip .ejs extensions


app.get("/",function(req,res){
    res.render("home");
});

app.get("/fallinlovewith/:breed",function(req,res){
    var breed = req.params.breed;
    res.render("returnvar",{thingVar:breed});
});

app.get("/posts", function(req, res){
    var posts = [
            {title: "This is the first post", author: "Bhaskar"},
            {title: "This is the second post", author: "Sidda"},
            {title: "This is the third post", author: "Baddam"}
        ];
    res.render("post",{posts:posts});
});

app.get("*",function(req,res){
    res.send("Dafaq bro");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Hello");
});


// app.get("/speak/:animal", function(req,res){
//     var animal = req.params.animal
//     if (animal == 'dog') {
//         res.send("The dog says 'Woof Woof!!");
//     }else if(animal == 'cow'){
//         res.send("The cow says 'Moooo");
//     }else if(animal == 'pig'){
//         res.send("The pig says 'Oink!'");
//     }else{
//         res.send("What does the "+animal+" say?");
//     }
// });


// app.get("/repeat/:text/:number",function(req,res){
//     var message = req.params.text;
//     var count = Number(req.params.number);
//     var result = ' ';
//     for(var i = 1; i<=count; i++){
//         result = result + message + " ";
//     }
//     res.send(result)
// });
