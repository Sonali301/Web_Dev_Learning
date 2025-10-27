const mongoose = require('mongoose'); // require mongoose
// let url = "https://localhost:8080/users"
// mongoose.connect('mongodb://127.0.0.1:27017/test');  // index.js file connect to mongodb


main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

});
const User = mongoose.model("User",userSchema); // userschema is coverteted to collectio under mongodb .// creating collection

// const user2=  new User({
//     name:"Adam",
//     email:"adam@yahoo.im",
//     age:40,
// });
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.insertMany([
//     {name:"bruce",email:"bruce@gmail.com",age:50},
//     {name:"kaushik",email:"kaushike@gmail.com",age:19},
//     {name:"sonali",email:"sonali@gmail.com",age:18}
// ]).then((data)=>{
//     console.log(data);
// })

// User.find({age:{$gt:19}})
//     .then((res)=>{
//         console.log(res[0].name);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// User.findOne({age:{$gt:19}})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
    //  })

// User.findById('675636c7a3be2999f34e234d')
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
        // console.log(err);
//     })

// User.updateMany({age:{$gte:40}},{age:55})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// User.findOneAndUpdate({name:"kaushik"},{age:20},{new:true})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// User.deleteOne({name:"Adam"})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// User.deleteMany({age:{$lt:21}})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


User.findByIdAndDelete('675636c7a3be2999f34e234d')
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })