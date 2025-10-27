const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path =require("path");
const Chat = require("./models/chat.js"); // requiring chat file
const methodOverride = require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public"))); //attach css file
app.use(express.urlencoded({extended:true})); // to parse the data
app.use(methodOverride("_method"));


main()
    .then(()=>{
        console.log("connection successful");
    }).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});

// Index route => show all chats
app.get("/chats",async(req,res)=>{
    let chats = await Chat.find(); // it will bring the data from database. this is a async function
    // console.log(chats);
    res.render("index.ejs",{chats});
});

// NEW ROUTE
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


// POST ROUTE
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:msg,
        created_at:new Date()
    });
    newChat.save()
        .then((res)=>{ // when then is used await is not required
            console.log("chat was saved");
        })
        .catch((err)=>{
            console.log(err);
        })
    res.redirect("/chats");
});

// EDIT ROUTE
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id); // find the chat of that id 
    res.render("edit.ejs",{chat});
})

// UPDATE ROUTE
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,{message:newMsg},{runValidators:true,new:true}); // find the chat of that id 
    // console.log(updatedChat);
    res.redirect("/chats");
})

// DESTROY ROUTE
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    // let {msg:newMsg} = req.body;
    // console.log(newMsg);
    let deletedChat = await Chat.findByIdAndDelete(id); // find the chat of that id 
    console.log(deletedChat);
    res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("root is working");
});

