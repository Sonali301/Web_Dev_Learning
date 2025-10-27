const express = require ("express"); // to require express
const app = express(); // to execute express
const port = 3000; // port define
const {v4:uuidv4} =require('uuid'); // to require uuid and v4 means version 4
const methodOverride = require("method-override"); // to require method-override package

// jb v post request se hum apne form se koi data bhejte hai 
// ya koi nya data ayega server k pass toh usse parse nhi kr payega toh 
// parse krne k liye dobara se middleware use krna pdega ki jb 
// frontend se ya client side se jb v hmara form submit hota hai toh uss data
// ko express samjh paye toh uske liye hme kuch kuch chize likhni pdegi. 
// app.use() taki sari ki sari api request data ko samjh paye
// toh jo hmara ab urlencoded data hoga usko v hmara express parse ya samjh payega api request k andr .
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method")); // to use method-override

// create basic path or route
//  /posts se hme important chiz sikhne ko milti hai ki hmari resource ka name kya hai
// aur kn se resourse k sth hum curd operation perform kr rhe .i.e posts
// isliye hmne api k name /posts diya hai
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}); //rendering file and all data
});

// to render the form which is new post 
app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

// to accept the new post in /posts route
app.post("/posts",(req,res) =>{
    let id = uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content});  // push property add the new post
    res.redirect("/posts");  // redirects to the /posts url i.e all posts
}); // req.body qki get request me toh request k parameters
// k andr query k andr hmari information ati hai pr post request me 
// request ki body k andr hmari information ati hai 
// isliye hum request ki body ko print krwa rhe


// to get one post using id
app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post=posts.find((p) => id===p.id);
    res.render("show.ejs",{post});
    
})

// to update the post 
app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let newContent =req.body.content;
    let post=posts.find((p) => id==p.id);
    post.content=newContent;
    console.log(post);
    // res.send("patch request");
    res.redirect("/posts");
    
});  // work in hopscotch

// to edit the post and making edit post router
app.get("/posts/:id/edit",(req,res) =>{
    let {id}=req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{posts});
});

// DELETE POST ROUTER
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts =posts.filter((p) => id !==p.id);
    res.redirect("/posts");
})


// ab qki hmare pass koi v post k data nhi hai mtlb 
// hmare pass databases nhi hai jiske andr hum sare k sare post ki 
// uername content sari ki sari chizo ki information store kra ske
// toh usee replicate krne k liye hum server site pr array create kr lenge jo 
// hmare post k sare data ko store karata hai
let posts = [ // it is not const because if it will be const then we will be  not able to change and delete
    {
        id: uuidv4(),
        username : "apnacollege",
        content : "I love coding!",
    },
    {
        id: uuidv4(),
        username : "shradhakhapra",
        content : "Hard work is important to achieve success!",
    },
    {
        id: uuidv4(),
        username : "sonalikumari",
        content : "I got selected for my 1st internship!",
    }
]; // all these are post data

app.listen(port,() => {
    console.log("Listening to port :3000 ");
});

// to use public and views floder in index.js require path and then set view engine
const path = require("path");
app.set("view engine","ejs");
// set path for views directory in while index.ejs file is there where main html file is present
app.set("views",path.join(__dirname,"views"));
// for public folder in while css file is there
app.use(express.static(path.join(__dirname,"public")));
