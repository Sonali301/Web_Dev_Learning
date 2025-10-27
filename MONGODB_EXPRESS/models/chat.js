const mongoose = require('mongoose');
// this file wii goes to index.js . main file is index.js only
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date,
        required:true,
    }
});

const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat; // exporting the file to index.js