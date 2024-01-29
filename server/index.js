const express = require("express")
var app = express()
// CORS
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173"
  };
app.use(cors(corsOptions));


// Handle JSON and form data
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data'

app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});

app.get("/",function(request,response){
    response.send("Hello World!");
});

app.get("/skus",function(request,response){
    console.log('skus',request.query);
    let options = [
        {label: 'KS14354', value: 'KS14354'},
        {label: 'KS14316', value: 'KS14316'},
        {label: 'EB522', value: 'EB522'},
        {label: 'CESSY3005-03', value: 'CESSY3005-03'}, 
        {label: 'KS14317', value: 'KS14317'},
        {label: 'KS14318', value: 'KS14318'},
        {label: 'KS14319', value: 'KS14319'},
               
    ];
    search = request.query.search;
    //Starts with
    //options = search?options.filter(option => option.label.startsWith(search)):options;
    options = search?options.filter(option => option.label.startsWith(search)):options;
    setTimeout(function(){
        response.json( {success: true, result: options} );
        //response.send("Hello "+request.body.id);
    },1000);
});

app.get("/hotItems",function(request,response){
    setTimeout(function(){
        // get params from request
        console.log('hotItems',request.query);
        result = ['KS14354', 'KS14316'];
        response.json({success: true, result: result});
        //response.send("Hello "+request.body.id);
    },700);
});


app.get("/trendingItems",function(request,response){
    setTimeout(function(){
        // get params from request
        console.log('trendingItems',request.query);
        result = ['CESSY3005-03', 'KS14319'];
        response.json({success: true, result: result});
        //response.send("Hello "+request.body.id);
    },700);
});

app.get("/seasonalFavorites",function(request,response){
    setTimeout(function(){
        // get params from request
        console.log('seasonalFavorites',request.query);
        result = ['CESSY3005-03', 'KS14319'];
        response.json({success: true, result: result});
        //response.send("Hello "+request.body.id);
    },700);
});
