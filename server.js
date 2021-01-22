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

app.get("/users",(req,res) => {
    res.send(users);
})

app.listen(PORT,()=> {
    console.log(`Listening to PORT number : ${PORT}`);
})