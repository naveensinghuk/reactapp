import React, { useEffect, useState } from 'react'
import './demo.css';
const Demo = (props) => {
    const second={
        color:'red',
        fontSize:"60px",
        fontWeight:"bold",
        textAlign:'start'
    }
    const newdata=props.value
  // console.log(newdata [0].name)
  return (
    <div>
      <h1 className='first'>external css in react</h1>
      <h1 style={second}>internal css in react</h1>
      <h1>conditional css in react</h1>
      <h1>this is user mobile:- {newdata [0].address.user [0].about_user.mobile}</h1>
      <h1>this is array 1  :-{newdata [0].address.user [1].education}</h1>

    </div>
  )
}

export default Demo
