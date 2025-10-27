import { useEffect, useState } from "react";

export default function Joker() {
    
    let [joke,setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";
    
    const getnewJoke = async () =>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        setJoke ({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    // to get the first joke , we use useeffect
    useEffect ( () => {
        async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        setJoke ({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },[]);

    //  in joke first come setup then punchline
    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getnewJoke}>New Joker</button>
        </div>
    );
}