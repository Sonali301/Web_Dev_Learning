const express= require("express");
const router = express.Router(); // router object

// POST
// INDEX - POST
router.get("/",(req,res)=>{
    res.send("GET for posts");
})

// SHOW -POST
router.get("/:id",(req,res)=>{
    res.send("GET for show post id");
})

// POST-POST
router.post("/",(req,res)=>{
    res.send("Post for posts");
})

// DELETE-POST
router.delete("/:id",(req,res)=>{
    res.send("delete for post id");
})

module.exports = router;