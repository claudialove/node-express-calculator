
///REQUIRE/////
const express = require("express");

/////SET UP//////
const app = express();

////ROUTE///////
app.get("/", function(req, res){
    res.send("hello world");
});

////SPIN UP THE SERVER////
app.listen(3000, function(){
    console.log("your server started on port 3000");
});