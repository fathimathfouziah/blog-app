import React from "react";

const Comments=(props)=>{
    const {comments}=props
    return (<>
        <div>
            {comments.map((i,key)=>(
                <div key={key}>
                    <h3>{i.username}</h3>
                    <p>{i.text}</p>
                </div>
            ) )}        
            
        </div>
        </>)
    
}

export default Comments
