const mongoose = require('mongoose');
const Chat = require("./models/chat.js"); // requiring chat file
main()
    .then(()=>{
        console.log("connection successful");
    }).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
//     from:"neha",
//     to:"priya",
//     message:"send me your exam sheets",
//     created_at: new Date() // random date is created. in date last is Z which means it is set according to UTC
// });
// chat1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

let allChats = ([
    {
        from:"neha",
        to:"priya",
        message:"send me your exam sheets",
        created_at: new Date() // random date is created. in date last is Z which means it is set according to UTC
    },
    {
        from:"sonali",
        to:"kaushik",
        message:"how r u",
        created_at:new Date(),
    },
    {
        from:"lucky",
        to:"kaniz",
        message:"yes, I am going to college",
        created_at : new Date(),
    },
    {
        from:"shubhangi",
        to:"radhika",
        message:"let's go to eat something",
        created_at : new Date(),
    }
]);
Chat.insertMany(allChats);