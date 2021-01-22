require("dotenv").config();

const express = require("express");

const PORT = 8000 || process.env.PORT;

const app = express();

const users = [
    {"id" : 1, "name" : "name 1"},
    {"id" : 2, "name" : "name 2"},
    {"id" : 3, "name" : "name 3"},
    {"id" : 4, "name" : "name 4"},
    {"id" : 5, "name" : "name 5"},
    {"id" : 6, "name" : "name 6"},
    {"id" : 7, "name" : "name 7"},
    {"id" : 8, "name" : "name 8"},
    {"id" : 9, "name" : "name 9"},
    {"id" : 10, "name" : "name 10"},
    {"id" : 11, "name" : "name 11"},
    {"id" : 12, "name" : "name 12"}
]

app.get("/users",paginated(users),(req,res) => {
   
   res.send(res.paginatedResults);
})

app.listen(PORT,()=> {
    console.log(`Listening to PORT number : ${PORT}`);
})


function paginated(user){
    return(req,res,next)=> {
    let pageNumber = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);

    //Get the startIndex of the user to be displayed
    // and the lastIndex of the user

    let startIndex = (pageNumber-1)*limit;
    let endIndex = startIndex + limit;
    //console.log(endIndex);

    let results = {};


    /*
     if You are using database the endIndex mustBe less 
     then await user.countDocument().exec(); 

    */

    if(startIndex> 0){
        results.previous = {
            pageNumber : pageNumber-1,
            limit : limit
        }
    };

    if(endIndex <  users.length){
        results.next = {
            pageNumber : pageNumber+1,
            limit : limit
        }
    };


    // Get the result between the start and End Index
    results.result = users.slice(startIndex,endIndex);

    res.paginatedResults = results;
    next();
    }
}