const express=require("express");
const app = express();
const path = require("path");

const port=8080;

app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// })

// app.get("/hello",(req,res)=>{
//     res.send("hello");
// })


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

// passing data to ejs
// app.get("/rolldice",(req,res)=>{
//     let diceVal=Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs",{diceVal});
// })

// create a basic template for instagram page based on route /ig/:username
// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     // console.log(username);
//     res.render("instagram.ejs",{username});
// })

// loops in ejs for instagram followers
// app.get("/ig/:username",(req,res)=>{
//     const followers=["adam","bob","steve","abc"];
//     let {username}=req.params;
//     // console.log(username);
//     res.render("instagram.ejs",{username,followers});
// })

// instagram page with ejs
app.get("/ig/:username",(req,res)=>{
    let {username}= req.params;
    const instaData=require("./data.json");
    const data= instaData[username];
    // console.log(instaData);
    // console.log(data);
    if(data){
        res.render("instagram_data.ejs",{data});
    }else{
        res.render("error.ejs");
    }
})

app.use(express.static("piblic"));
