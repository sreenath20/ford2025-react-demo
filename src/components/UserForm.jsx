import { useState } from "react";

function UserForm(){

    // define data members in function component using useStateHook
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [isActive,setIsactive] = useState(true);
    const [pincode,setPincode] = useState(0);
    const [userObj,serUserObj] = useState({});

    const loginHandle = ()=>{
        console.log(name +":"+password);
    }
    return (
        <> 
         {/* JSX segment is used as root to group multiple elements */}
            <h3> User Login Form</h3>
           <form>
            Name:
            <input value = {name} type="text" onChange={e=>setName(e.target.value)}></input><br></br>
            Password:
            <input value={password} type="password" onChange={e=>setPassword(e.target.value)}></input><br></br>

            <input type="button" value ="Login" onClick={loginHandle}></input>
            </form> 
            your name is : {name}.
        </>
    );
}

export default UserForm;