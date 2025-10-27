const express = require("express");
const app = express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// // require cookie parser
// const cookieParser = require("cookie-parser");

// // to use it
// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","India",{signed:true});
//     res.send("signed cookie sent");
// })

// app.get("/verify",(req,res)=>{
//     // console.log(req.cookies); // it prints unsigned cookie
//     console.log(req.signedCookies); // it prints signed cookies
//     res.send("verified");
// })

// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("madeIn","India");
//     res.send("sent you some cookies!");

// })

// app.get("/greet",(req,res)=>{
//     let{name = "anonymous "} = req.cookies;
//     res.send(`Hii,${name}`);
// })

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("HII! I am a root.");
// });

// app.use("/users",users); // /users -> common path
// app.use("/posts",posts); // /posts -> common path


// EXPRESS SESSION
const session = require('express-session');
const sessionOptions = {
    secret : "mysupersecretstring",
    resave:false,
    saveUninitialized:true
};

app.use(session (sessionOptions));
// Forces the session to be saved back to the session store, even if the session was never modified during the request.
// Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.

// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }

//     res.send(`You sent a request ${req.session.count} times`);
// })

// connect-flash
const flash = require('connect-flash');
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error","user not registered");
    }else{
        req.flash("success","user registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
    // res.send(`hello,${req.session.name}`);
})



// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });

app.listen(3000,()=>{
    console.log("server is listening to port 3000");
})