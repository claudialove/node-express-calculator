
///REQUIRE/////
const express = require("express");
const bodyParser = require("body-parser");

/////SET UP APP//////
const app = express();

////USE BODY PARSER/////////
app.use(bodyParser.urlencoded({extended:true}));

////ROUTE SUM CALC///////
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;
res.send("The result of the calculation is " + result);
});

//////ROUTES BMI CALC/////
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
var height = Number(req.body.height);
var weight = Number(req.body.weight); 
var bmi = Math.floor((703 * weight)/(height * height));

res.send("Your current BMI is " + bmi);
});





////SPIN UP THE SERVER////
app.listen(3000, function(){
    console.log("your server started on port 3000");
});