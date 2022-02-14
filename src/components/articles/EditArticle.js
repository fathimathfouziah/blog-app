import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import articles from "./SampleArticleListDB";
import { useNavigate } from "react-router-dom";
import Card from "../UIElements/Card";
const serveraddress="/api/article"
const EditArticle = (props) => {
    const [articleInfo, setArticleInfo] = useState({ _id: '', name: '', title: '', description: '', upvotes: '' })
    const { _id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        fetchAPI();
    }, [_id])
    function handleChange(event) {
        const { name, value } = event.target
        setArticleInfo({ ...articleInfo, [name]: value })
        
    }
    async function fetchAPI() {
        const response = await fetch(`${serveraddress}/${_id}`)
        const body = await response.json()
        setArticleInfo(body)
    }
    async function EditArticle() {
        const name = articleInfo.name;
        const title = articleInfo.title;
        const username = articleInfo.username;
        const description = articleInfo.description;
        const mytoken=localStorage.getItem('token')
       // var widgets = JSON.parse(mytoken);
       
        const response = await fetch(`${serveraddress}/editarticle/${_id}`, {
            method: 'post',
            body: JSON.stringify({ name, title, username, description }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+ mytoken
            }
        })
        navigate('/article-list')
    }

    return (<>
        <Card>
            <div>
                <h3>i am edit</h3>
                <h3>{_id}</h3>
                <label>
                    Name : <br />
                    <input name="name" onChange={handleChange} value={articleInfo.name} type="text" required/>
                </label>
                <br />
                <label>
                    Title : <br />
                    <input name="title" onChange={handleChange} value={articleInfo.title} type="text" required />
                </label>
                <br />
                <label>
                    Description : <br />
                    <textarea cols="20" rows="5" onChange={handleChange} value={articleInfo.description} name="description"></textarea>
                </label>
                <input onChange={handleChange} name="_id" type="hidden" value={_id} />
                <br />
                <button onClick={EditArticle}>Edit Article</button>
            </div>
        </Card>
    </>)

}

export default EditArticle