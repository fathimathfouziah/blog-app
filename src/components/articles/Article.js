import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import articles from "./SampleArticleListDB";
//import articleContent from './SampleArticleListDB'
//import Error from "../error/Error";
//import axios from 'axios'
import Comments from "./Comments";
import UpvoteSection from "./UpvoteSection";
import AddComments from "./AddComments";
import CrudOperations from "./CrudOperations";
const serveraddress="/api/article"
const Article = (props) => {
    
    
    const { uniqueid } = useParams()
    const [articleData, setarticleData] = useState({name:'',title:'',description:'', upvotes: 0, comments: [] })
    //const myarticle = articleContent.find((ar) => ar._id === uniqueid)
    useEffect(() => {

        fetchAPI();
    }, [uniqueid])
    async function fetchAPI() {
               
        const response = await fetch(`${serveraddress}/${uniqueid}`)
        const body = await response.json()
        setarticleData(body)
        // axios.get(`http://localhost:5001/api/article/${name}`)
        //     .then(res => {
        //         const persons = res.data;
        //         console.log(persons)
        //         setarticleData(persons)
        //         //this.setState({ persons });
        //     })
        

    }
    // if (!myarticle) return <Error />
    return (<>
      <UpvoteSection uniqueid={uniqueid} setarticleData={setarticleData} upvotes={articleData.upvotes}/> <br />
    <div style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'100%',display:"flex",alignItems:"center",backgroundColor:"mediumseagreen"}}>
        <h5>
            Article with {articleData.title} has got {articleData.upvotes} upvotes
            <br />Its description is as follows <br />{articleData.description}
        </h5>
        </div> 
        <div style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'50%',display:"flex",alignItems:"center",backgroundColor:"mediumseagreen"}}>
     { (localStorage.getItem('token') && localStorage.getItem('usertype')==='true') && (<CrudOperations _id={uniqueid}/>)}<br />
        
     </div>   
        <div style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'50%',display:"flex",alignItems:"center",backgroundColor:"mediumseagreen"}}>
        <Comments comments={articleData.comments}/> <br />
        
        <AddComments uniqueid={uniqueid} setarticleData={setarticleData}/> 
        </div>
    </>)

}

export default Article

