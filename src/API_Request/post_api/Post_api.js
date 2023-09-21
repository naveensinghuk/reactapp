import React, { useState } from 'react'

const Post_api = () => {
const API_HOST="https://jsonplaceholder.typicode.com/posts"
  const [la,setl]=useState("")
  const[body, setbody]=useState("");
  const[userid, setuserid]=useState("");
  const[title, settitle]=useState("");
  const postdata={body,userid,title}
    const userdatasubmit=()=>{
      // console.log({body, userid, title})
      fetch(API_HOST,{
        method:"POST",
        headers:{'Accept':'application/json','Content-Type':'application/json'},
        body:JSON.stringify(postdata)
      }).then((result)=>{
        // console.log(result)
        result.json().then((l)=>{
          console.log(l.body) 
          setl(l)})
      })
    }

  return (
    <div>
    <h1>Post api in react</h1>
    <input type='text' value={body} placeholder='body'  onChange={(b)=>{setbody(b.target.value)}}></input><br/><br/>
    <input type='text' value={userid} placeholder='User-id' onChange={(u)=>{setuserid(u.target.value)}}></input><br/><br/>
    <input type='text' value={title} placeholder='title' onChange={(t)=>{settitle(t.target.value)}}></input><br/><br/>
    <button type='button' onClick={userdatasubmit}>submit data</button>
    <h1>name :- {la.body}</h1>
    <h1>user-id:- {la.userid}</h1>
    <h1>department :-{la.title}</h1>

    </div>
  )
}

export default Post_api
