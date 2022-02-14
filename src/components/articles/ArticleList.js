import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Card from '../UIElements/Card'
//import articleContent from './SampleArticleListDB'
import {UserContext} from '../../App'
import AddArticle from "./AddArticle";
const serveraddress="/api/article"
const ArticleList=(props)=>{
const {state,dispatch}=useContext(UserContext)
const [articleContent,setarticleContent]=useState([])
async function fetchAllArticles(){
  const response = await fetch(`${serveraddress}/getallarticles/`)
        const body = await response.json()
        
        setarticleContent(body.data)}
useEffect(()=>{   
  fetchAllArticles()
},[])

if (localStorage.getItem('token') && localStorage.getItem('usertype')==='true'){
    return (
      
        <div>      

         <Link style={{color:"black"}} to={`/addarticle`}>
            <h3>Add Article</h3>
        </Link><br />
         
        {articleContent.map((i,key)=>(
          <>
          
            <Link style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'50%',display:"flex",alignItems:"center",backgroundColor:"rgb(217, 247, 247)"}} key={key} to={`/article/${i._id}`}>
              <h3 style={{margin:"auto",display:"flex",alignItems:"center"}}>  {i.title}</h3>
            </Link>
            
            
            </>
        ))}
        </div>
               
        )
        }

        else if((localStorage.getItem('token') && localStorage.getItem('usertype')==='false')){
          return (
            <>
            {articleContent.map((i,key)=>(
              <>
              
                <Link style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'50%',display:"flex",alignItems:"center",backgroundColor:"rgb(217, 247, 247)"}} key={key} to={`/article/${i._id}`}>
                  <h3 style={{margin:"auto",display:"flex",alignItems:"center"}}>  {i.title}</h3>
                </Link>
                
                
                </>
            ))}
            </>
          )
        }
}

export default ArticleList
