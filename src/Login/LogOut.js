import React, {useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const LogOut = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(UserContext)
    const clearLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usertype')
        dispatch({ type: "USER", payload: false })
        navigate('/')
    }
useEffect(()=>{
clearLocalStorage()
},[])
    return (
        <>
            {/* <button onClick={clearLocalStorage}>Logout</button> */}
        </>
    )

}

export default LogOut