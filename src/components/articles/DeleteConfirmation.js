import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const serveraddress="/api/article"
 function DeleteConfirmation(props){
     const [deleteStatus,setdeleteStatus]=useState('')
     const navigate=useNavigate()
    const {_id}=useParams()
    const mytoken=localStorage.getItem('token')
    async function DeleteArticle(){
    const response=  await fetch(`${serveraddress}/deletearticle/${_id}`,{
        'method':'delete',
        headers:{'Content-Type': 'application/json',
        'Authorization': "Bearer "+ mytoken}
    })
    const body= await response.json()
    setdeleteStatus(body.status)
    navigate('/article-list')
    }
    return (<>
        <div>
           <h3>Delete the record with id {_id}</h3>   
            <button onClick={DeleteArticle}>Yes DeleteConfirmation</button>
            <p>{deleteStatus}</p>
        </div>
        </>)
    
}

export default DeleteConfirmation