import React from "react";
const serveraddress="/api/article"

 function UpvoteSection(props){
    const {uniqueid,setarticleData,upvotes}=props
    async function fetchUpVotes(){
        const response=await fetch(`${serveraddress}/${uniqueid}/upvote`,{
            method:'post'
        })
        const body=await response.json()
        setarticleData(body)

    }
    return (<>
        <div style={{margin:"auto",marginBottom:"3px",marginTop:"3px",borderRadius:"6px" ,width:'50%',display:"flex",alignItems:"center",backgroundColor:"mediumseagreen"}}>
            
            <h3>This article has  {upvotes}  upvotes</h3>    <br />
            <button onClick={fetchUpVotes}>UpVote</button>
        </div>
        </>)
    
}

export default UpvoteSection