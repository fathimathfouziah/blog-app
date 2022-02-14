import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from '../App'
const serveraddress = "/api/auth"
const Register = () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const [credentialValues, setCredentialValues] = useState({ name: "", email: "", password: "", login: false, store: null })
    const handleChange = (event) => {
        const { name, value } = event.target
        setCredentialValues({ ...credentialValues, [name]: value })

    }
    async function RegisterUser() {
        const email = credentialValues.email;
        const password = credentialValues.password;
        const name = credentialValues.name;
        const response = await fetch(`${serveraddress}/register`, {
            method: 'post',
            body: JSON.stringify({name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        if (response.status === 400 || !body) {
            window.alert("UnSuccessgul Register")
        }
        else {
            //dispatch({ type: "USER", payload: true })
            //console.log(body.auth.tokenid);
            window.alert("Routing to Login")
            setCredentialValues({name:"", email: "", password: "" });

            // localStorage
            //     .setItem('token', body.auth.tokenid
            //     )
            // localStorage
            //     .setItem('usertype', body.user.isAdmin
            //     )
            navigate("/login")
        }
    }
    return (<>
        <label>
            Name : <br />
            <input name="name" onChange={handleChange} value={credentialValues.name} type="text" required/>
        </label> <br />
        <label>
            Email : <br />
            <input name="email" onChange={handleChange} value={credentialValues.email} type="text" required />
        </label>
        <br />
        <label>
            Password : <br />
            <input type="password" name="password" onChange={handleChange} value={credentialValues.password} required />
        </label>
        <br />
        <button onClick={RegisterUser}>Submit</button>
    </>)

}

export default Register
