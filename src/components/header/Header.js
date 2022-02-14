import React,{useContext} from "react";
import { Link } from "react-router-dom";
import './Header.css';
//import HeaderContent from "./HeaderContent";
//import HeaderContentLogin from "./HeaderContentLogin";
import {UserContext} from '../../App'
const Header=()=>{
    const {state,dispatch}=useContext(UserContext)
    if(state)
    return (
        <>
        <nav className="header">
            <h3>Fousia' s blog</h3>
            
            <div className="articles">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/article-list">Article List</Link>
                {/* <Link className="link" to="/addarticle">Add Article</Link> */}
                <Link className="link" to="/logout">Log Out</Link>
            </div>
        </nav>
        </>)
    else
    return(
        <>
        <nav className="header">
            <h3>Fousia' s blog</h3>
            
            <div className="articles">
                
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
            </div>
        </nav>
        </>
    )
}

export default Header