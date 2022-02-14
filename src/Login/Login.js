import React, { useContext,useState } from "react";

import { useNavigate } from "react-router-dom";
import {UserContext} from '../App'
const serveraddress="/api/auth"

const Login=()=>{
    const {state,dispatch}=useContext(UserContext)
    const navigate=useNavigate()
    const [credentialValues,setCredentialValues]=useState({email:"",password:"",login:false,store:null})
    const handleChange=(event)=>{
        const {name,value}=event.target
        setCredentialValues({...credentialValues,[name]:value})
        
    }
   async function fetchCredentials(){
        const email = credentialValues.email;
        const password = credentialValues.password;
        const response = await fetch(`${serveraddress}/login`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        if(response.status===400 || !body){
            window.alert("UnSuccessgul Login")
        }
        else{
            dispatch({type:"USER",payload:true})
        console.log(body.auth.tokenid);
        setCredentialValues({ email: "", password: "" });
        
        localStorage
        .setItem('token',body.auth.tokenid        
        )
        localStorage
        .setItem('usertype',body.user.isAdmin        
        )
        navigate("/article-list")
    }
    }
    return (<>
         <label>
                    Email : <br />
                    <input name="email" onChange={handleChange} value={credentialValues.email} type="text" required/>
                </label>   
                <br />        
                 <label>
                    Password : <br />
                    <input name="password" type="password" onChange={handleChange} value={credentialValues.password} required/>
                </label> 
                <br />
            <button onClick={fetchCredentials}>Submit</button>
        </>)
    
}

export default Login
