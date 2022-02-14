import React, { useState } from "react";
const serveraddress="/api/article"

const AddComments = (props) => {
    const { uniqueid, setarticleData } = props;
    console.log(uniqueid)
    const [commentvalues,setCommentValues]=useState({username:"",comment:""})
    const handleChange=(event)=>{
        const {name,value}=event.target
        setCommentValues({...commentvalues,[name]:value})
        
    }
    async function fetchComments() {
        const username = commentvalues.username;
        const text = commentvalues.comment;

        const response = await fetch(`${serveraddress}/${uniqueid}/comments`, {
            method: 'post',
            body: JSON.stringify({ username, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        setarticleData(body);
        setCommentValues({ username: "", comment: "" });
    }
    return (<>
        <div>
            
                <label>
                    Name : <br />
                    <input name="username" onChange={handleChange} value={commentvalues.username} type="text" />
                </label>    <br />       
                
                <label>
                    comments : <br />
                    <textarea cols="20" rows="5" onChange={handleChange} value={commentvalues.comment} name="comment"></textarea>
                </label>
                <br />
            <button onClick={fetchComments}>Submit</button>
        </div>
    </>)

}
//2015 may 2 12.35 chith
export default AddComments