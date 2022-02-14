
import React, { useState } from "react";
//import articles from "./SampleArticleListDB";
import { useNavigate } from "react-router-dom";
const serveraddress="/api/article"
const AddArticle = (props) => {
    const { name, setarticleData } = props;
    const navigate=useNavigate()
    const [articleValues,setArticleValues]=useState({name:"",title:"",description:"",username:""})
    const handleChange=(event)=>{
        const {name,value}=event.target
        setArticleValues({...articleValues,[name]:value})
        
    }
    async function AddArticle() {
        const name = articleValues.name;
        const title = articleValues.title;
        const username = articleValues.username;
        const description = articleValues.description;
        const mytoken=localStorage.getItem('token')
        const response = await fetch(`${serveraddress}/addarticle`, {
            method: 'post',
            body: JSON.stringify({name,title, username,description}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+ mytoken
            }
        })
        const body = await response.json();
        //setarticleData(body);
        setArticleValues({ name: "", title: "" ,description:""});
        navigate('/article-list')
    }
    return (<>
        <div>
            
                <label>
                    Name : <br />
                    <input name="name" onChange={handleChange} value={articleValues.name} type="text" />
                </label>   
                <br />        
                <label>
                    Title : <br />
                    <input name="title" onChange={handleChange} value={articleValues.title} type="text" />
                </label> 
                <br />
                <label>
                    Description : <br />
                    <textarea cols="20" rows="5" onChange={handleChange} value={articleValues.description} name="description"></textarea>
                </label>
                <br />
            <button onClick={AddArticle}>AddArticle</button>
        </div>
    </>)

}
//2015 may 2 12.35 chith
export default AddArticle
