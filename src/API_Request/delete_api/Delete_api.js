import React, { useEffect, useState } from 'react';

const Delete_api = () => {
  const [value,setvalue]=useState([])
  const API_HOST="https://jsonplaceholder.typicode.com/posts"

   useEffect(()=>{
    listdata()
    // console.log(value)
   },[])

   const listdata=()=>{
    fetch(API_HOST).then((resp)=>{
      resp.json().then((result)=>{
        // console.log(result);
        setvalue(result)
      })
    })
   }
  const deleteuserdata=(v)=>{
    fetch(API_HOST+v,{method:"DELETE"}).then((resp1)=>{
      resp1.json().then((dltresult)=>{
        console.log(dltresult)
        listdata() 
        
      })
    })
  }
  
  return (<><h1>Delete api in React</h1>
<table border={'2px'} style={{alignContent:'center', width:'50%' }}>
      <tr style={{fontSize:'20px', fontWeight:'bold',backgroundColor:'pink',color:'darkblue'}}>
        <td>ID</td>
        <td>userId</td>
        <td>Title</td>
        <td>Body</td>
        <td>Opreration</td>
      </tr>
     
        {value.map((response)=>
          (<> <tr>
            <td>{response.id}</td>
            <td>{response.userId}</td>
            <td>{response.title}</td>
            <td>{response.body}</td>
            <td><button onClick={()=>deleteuserdata(response.id)}>Delete</button></td>
            </tr>
            </>)
        )}
       </table>
  </>)
}

export default Delete_api
