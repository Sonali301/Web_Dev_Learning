const express = require('express');
const app = express();
// console.dir(app);
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     res.send("This is basic response");
// });

// route path
// app.get("/",(req,res)=>{
//     res.send("hello, ");
// });

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple part");
// });

// app.get("/orange",(req,res)=>{
//     res.send("orange path");
// })


// parameters path
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params)
//     res.send("hello , i am root path");
// });

// using variable
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     res.send(`Welcome to the page of @${username}.`);
// });

// using htmlcode
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     let htmlStr=`<h1>Welcome the page of @${username}!</h1>';
//     res.send(htmlStr);
// })