import React, { useState } from 'react';
 const API_News="https://content-staging.connectfm.ca/api/home";

const Vancouver_news = () => {
    const [news, setnews]=useState("");
    fetch.apply(API_News).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log("error through")
    });
  return (
    <div>
      
    </div>
  )
}

export default Vancouver_news
