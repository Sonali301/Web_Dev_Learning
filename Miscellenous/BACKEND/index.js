const express=require("express");
const app=express();
const port = 3000;
// to handle post request 
app.use(express.urlencoded({extended:true}));

// to accept the get request
app.get("/register",(req,res)=>{
    let { user,password}=req.query;
    res.send(`Standard GET response.Welcome ${user}!`);
})

// to accept the post request
app.post("/register",(req,res)=>{
    let { user,password}=req.body;
    res.send(`Standard POST response.Welcome ${user}!`);
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});