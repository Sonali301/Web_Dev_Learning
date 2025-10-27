let btn =document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
    let link =await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
});




async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
        // return res.data.fact;
    }catch (e) {
        console.log("error - ", e);
        return " No Image found";
    }
}



// cat fact -

// btn.addEventListener("click",async()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText=fact;
// });

// let url="https://catfact.ninja/fact";


// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch (e) {
//         console.log("error - ", e);
//         return " No fact found";
//     }
// }