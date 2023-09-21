import React, { useEffect, useState } from 'react'


const Hooks = () => {
  const API_HOST="https://jsonplaceholder.typicode.com/posts"


  const [count, setcount]=useState(0)
  const rend=()=>{setcount(count+1)}



  const[value,setvalue]=useState([]);
  useEffect(()=>{
    fetch(API_HOST).then((resp)=>{
      resp.json().then((data)=>{
        // console.log(data);
        setvalue(data)
        
      })
    })
  },[])
  return (
    <div>
      <h1>what is react hooks ?</h1>
      <p>React hooks are set of funtion that allow to add state and life-cycle feature use to functional compoents in react. without needing to class components. Hooks replace to life-cycle method bcz life cycle method can not use in the funtional components . that;s why created hooks for using to functional components </p>
      <h2> hooks intruduced in react 16.8 </h2>
      <div>
        <button onClick={rend}>Click here</button>:- <span>New value = {count}</span>
      </div>
      <div> <table border={'2px'} style={{alignContent:'center', width:'10  0%' }}>
            <tr style={{fontSize:'20px', fontWeight:'bold',backgroundColor:'pink',color:'darkblue'}}>
              <td>User_ID</td>
              <td>ID</td>
              <td>User_Title</td>
              <td>User_Body</td>
            </tr>
        {value.map((result)=>
         <tr>
            <td>{result.userId}</td>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.body}</td>
          </tr>)}
        </table>
      </div>
    </div>
  )
}

export default Hooks
