import React from "react";
import { Link } from "react-router-dom";

const CrudOperations=(props)=>{
    
    const {_id}=props
    return (<>
        <div style={{display:"flex",alignItems:"center",margin:"auto"}}>
        <Link style={{padding: "10px",color:"red"}} to={`/article/edit/${_id}`}>
              <h3>Edit Article </h3>
        </Link>     
        <Link style={{padding: "10px",color:"red"}} to={`/article/delete/${_id}`}>
              <h3>Delete Article </h3>
        </Link> 
        <Link style={{padding: "10px",color:"red"}} to={`/addarticle`}>
              <h3>Add Article </h3>
        </Link> 
        {/* <Link className="link" to="/addarticle">Add Article</Link> */}
        </div>
        </>)
    
}

export default CrudOperations
