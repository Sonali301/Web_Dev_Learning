const express= require("express");
const router = express.Router(); // router object

// USERS
// INDEX - USERS
router.get("",(req,res)=>{
    res.send("GET for users");
})

// SHOW -USERS
router.get("/:id",(req,res)=>{
    res.send("GET for show user id");
})

// POST-USERS
router.post("",(req,res)=>{
    res.send("Post for users");
})

// DELETE-USERS
router.delete("/:id",(req,res)=>{
    res.send("delete for user id");
})

module.exports = router;