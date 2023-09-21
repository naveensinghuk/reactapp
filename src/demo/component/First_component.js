import React, { useState,useEffect } from 'react';
import './First_component.css';
// var API_DEMO="https://fakestoreapi.com/products/1";
var API_DEMO="https://fakestoreapi.com/products";


const First_component = () => {
  const[respon, setrespo]=useState([]);
 
  useEffect(()=>{

 
  fetch(API_DEMO).then((resp)=>{
    resp.json().then((responce)=>{
      console.log(responce [0]);
      setrespo(responce)
    })
  })
},[]);

  return (
    <div>
    <div className='main_head'>
    <h1>Heading</h1>
    </div>
      
      <table  width={'100%'}  style={{backgroundColor:'lightgreen', color:'black', textAlign:'center',}}>
      <tbody>
        <tr style={{fontWeight:'bold', backgroundColor:'lightblue', fontSize:'25px',}}>
          <td className='headding'>User-Id</td>
          <td className='headding'>User-Title</td>
          <td className='headding'>Price</td>
          <td className='headding'>Description</td>
          <td className='headding'>Category</td>
          <td className='headding'>Image</td>
          <td className='headding'>Rating</td>
        </tr>
        {respon .map((value,num)=><tr>
          <td className='headding'>{value.id}</td>
          <td className='headding'>{value.title}</td>
          <td className='headding'>{value.price}</td>
          <td className='headding'>{value.description}</td>
          <td className='headding'>{value.category}</td>
          <td className='headding'>{num && num==2  || num==0 ?<img src={value.image} width={'100%'} height={'100%'}/>: <img src={value.image} width={'50%'} height={'50%'}/>}</td>
          <td className='headding'>{value.rating.rate}</td>
          
        </tr>)}
       
       </tbody>
        
        </table>
      
          </div>
  )
}

export default First_component;
