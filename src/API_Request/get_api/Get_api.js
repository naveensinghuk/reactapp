import React, { useEffect, useState } from 'react'


var API_Host= "https://jsonplaceholder.typicode.com/posts"
const Get_api = () => {

  const[user,setuser]=useState([])

  useEffect(()=>{
  fetch(API_Host).then((resp)=>{
    resp.json().then((responce)=>{
      // console.log(responce)
      setuser(responce)
    })
  })
},[])
  
  // console.log(user)
  return (
    
    <div>
   
      <table border={'2px'} width={'1000px'}  style={{backgroundColor:'lightgreen', color:'black', textAlign:'center',}}>
        <tr style={{fontWeight:'bold', backgroundColor:'lightblue', fontSize:'25px'}}>
          <td>ID</td>
          <td>UserID</td>
          <td>Title</td>
          <td>Body</td>
        </tr>
        {user.map((value)=>
          <tr>
            <td>{value.id}</td>
            <td>{value.userId}</td>
            <td>{value.title}</td>
            <td>{value.body}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default Get_api
