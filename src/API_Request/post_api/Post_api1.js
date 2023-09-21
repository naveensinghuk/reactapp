import React, { useState } from 'react'

const Post_api1 = () => {

    
    var API_HOST="https://jsonplaceholder.typicode.com/posts";
    
    const[newdata, setneadata]=useState("123")
    const[firstname, setname]=useState("naveen");
    const[new1, setnew]=useState("new adde");
    const[fullname, setfullname]=useState(" singh rautela");
    const[email, setemail]=useState("naveensinghuk968@gmail.com");
    const[contnumber, setcontnumber]=useState("987654210");
    const inputdata={firstname, fullname, email,contnumber,new1}

    const submitvalue=()=>{
        // console.log(firstname,fullname,email,contnumber);
        var post_api_object={
          method:"POST",
          headers:{"Accept":"application/json","Content-Type":"application/json"},
          body:JSON.stringify(inputdata)}
        fetch(API_HOST,post_api_object).then((resp)=>{
          // console.log(resp)
            resp.json().then((finalvalue)=>{
              // console.log(finalvalue)
              setneadata(finalvalue)
            })
        })
        
    }
  return (
    <div>
   
      <h1>Post-1 Api in react</h1>
      <input type='text' value={firstname} placeholder='Name' onChange={(v)=>{setname(v.target.value)}}></input><br/><br/>
      <input type='text' value={fullname} placeholder='Full name' onChange={(f)=>{setfullname(f.target.value)}}></input><br/><br/>
      <input type='text' value={email} placeholder='email-id' onChange={(e)=>{setemail(e.target.value)}}></input><br/><br/>
      <input type='number' value={contnumber} placeholder='contact-number' onChange={(c)=>{setcontnumber(c.target.value)}}></input><br/><br/>
      <input type='text' value={new1} placeholder='new added' onChange={(c)=>{setnew(c.target.value)}}></input><br/><br/>
      <button type='submit' onClick={submitvalue}>submit</button>
      <div style={{color:'blue',}} >
            <h1>Name :- {newdata.firstname} </h1>
            <h1>Full-Name:- {newdata.fullname} </h1>
            <h1>Email-id :- {newdata.email}</h1>
            <h1>Contact-Number :- {newdata.contnumber}</h1>
            <h1> New added :- {newdata.new1}</h1>
      </div>
      
    </div>
  )
}

export default Post_api1;
