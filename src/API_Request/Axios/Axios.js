import React, { useEffect, useState } from 'react'
import axios from "axios"


const Axios1 = () => {
    const [user, setuser]=useState("")
    useEffect(()=>{
        axios.get("https://cms.dbmci.com/api/course/one-shot-revision-programme")
        // .then((responce)=>{
        //     // console.log(responce.data.title)
        //     setuser(responce.data)
        // })
        .then((result) => {
            console.log(result.data)
            setuser(result.data)
        }).catch((err) => {
            console.log("error")
        });
    },[])
  return (
    <div>
      <h1>heading -- {user.title}</h1>
    </div>
  )
}

export default Axios1
