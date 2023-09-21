// import React, { useState } from 'react'

// const Post_api2 = () => {
//     const API_HOST="https://jsonplaceholder.typicode.com/posts"

//     const[fname,setfname]=useState("naveen")
//     const[sname,setsname]=useState("singh")
//     const[lname,setlname]=useState("rautela")
//     const[srname,setsrname]=useState("thakur")

//     const postdata={fname,sname,lname,srname}
//     // console.log(postdata)
//     const [finaldata, setfinaledata]=useState("")
//     const submidata=()=>{
//     fetch(API_HOST,{
//         method:"POST",
//         headers:{'Accept':"application/json", 'content-Type':"application/json"},
//         body:JSON.stringify(postdata)
//     }).then((value)=>{
//         value.json().then((resp)=>{
//             // console.log(resp)
//             setfinaledata(resp)
            
//         })
//     })
// }
//   return (<>
//     <div>
//         <h1>Post api in react -3</h1>
//         <input type='text' value={fname} placeholder='F_name' onChange={(v)=>{setfname(v.target.value)}}/><br/><br/>
//         <input type='text' value={sname} placeholder='S_name'  onChange={(v)=>{setsname(v.target.value)}}/><br/><br/>
//         <input type='text' value={lname} placeholder='L_name'  onChange={(v)=>{setlname(v.target.value)}}/><br/><br/>
//         <input type='text' value={srname} placeholder='SIR_name'  onChange={(v)=>{setsrname(v.target.value)}}/><br/><br/>
//         <button type='submit' onClick={submidata}>Submit</button>
//         <div>
//             <h1>First_Name -: {finaldata.fname}</h1>
//             <h1>Second_Name -: {finaldata.sname}</h1>
//             <h1>Last_Name -: {finaldata.lname}</h1>
//             <h1>Sir_Name -: {finaldata.srname}</h1>
            
//         </div>
//     </div>
//   </>)
// }

// export default Post_api2


import React, { useState } from 'react'

const Post_api2 = () => {
    const api="https://jsonplaceholder.typicode.com/posts";
    const[value, setvalue]=useState([]);
    fetch(api,{
        method:"delete",
        headers:{'Accpet':"Application/json", 'Content-Type':"Application/json"},
        body:JSON.stringify()
    })
  return (
    <div>
      <h1>This is post api?</h1>
      <input type='text' placeholder='id'></input><br/><br/>
      <input type='text' placeholder='user_id'></input><br/><br/>
      <input type='text' placeholder='user_title'></input><br/><br/>
      <input type='text' placeholder='user_body'></input>
    </div>
  )
}

export default Post_api2
