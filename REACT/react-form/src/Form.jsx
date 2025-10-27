import { useState } from "react"

export default function Form () {
    
    let [formData,setFormData] = useState({
        fullName : "",
        username : "",
        password : "",
    })

        
    let handleInputChange = (event) =>{
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(newValue);  // fullName

        setFormData ( (currData) => {
            // currData[fieldName] = newValue ; // fieldName will always be in []
            return { ...currData,[event.target.name] : event.target.value};
        })
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            username : "" ,
            password : "",
        })
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input 
            placeholder="Enter your full name" 
            type="text" 
            value={formData.fullName}
            onChange={handleInputChange}
            id="fullname"
            name="fullName"
        />

        <br></br>
        <br></br>

        <label htmlFor="username">Username</label>
        <input 
            placeholder="Enter your username" 
            type="text" 
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"  // name and key should be same , so that it can identify and match it 
        />
        <br></br>
        <br></br>

        <label htmlFor="password">Password</label>
        <input 
            placeholder="Enter your password" 
            type="password" 
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"  // name and key should be same , so that it can identify and match it 
        />



        <button>Submit</button>
    </form>
}