import { useState } from "react";

export default function Counter (){

    function init(){
        console.log("init was executed");
        return Math.random();
    }

    let [count,setCount]=useState(init()); //initialisation

    // let incCount = () => {
    //     setCount(count+=1);
    // }

    // callback in updater function
    let incCount = () => {
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>

        </div>
    )
}