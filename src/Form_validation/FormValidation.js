import React, { useState, useTransition } from 'react'

const FormValidation = () => {
    const name= "";
    const passwd=""
    const[userinputpasswd, setuserinputpasswd]=useState("");
    const[userinput, setuserinput]=useState("");
    const [input_error, set_input_error]=useState(false);
    const [input_psswd, set_input_passwd]=useState(false);
    function userhandler(event){
     
      let user_input=event.target.value
      
      if(user_input.length<5){
        set_input_error(true)

      }else
      {set_input_error(false)}
      setuserinput(user_input)
    }
    const userpasswd_handler=(event)=>{
      let user_passwd=event.target.value
      if(user_passwd.length<5){
        set_input_passwd(true)
        }
        else{
          set_input_passwd(false)
        }
        setuserinputpasswd(userinput)
    }
    const submit_handler=()=>{
      if(userinput.length <5 || userinputpasswd.length <5){
        alert("Invalid Entry");
      }else{
        alert("Form Submitted")
      }
      
    }

  return (
    <div>
    
    <form style={{textAlign:'center'}}>
    <h1>Form Validation</h1>
   Name :- <input type='text' placeholder='User id' onChange={userhandler}/><br/>
   {input_error ?<span style={{color:'red'}}>invalid entry</span>:null}<br/><br/>

   Password :- <input type='password'  placeholder='password' onChange={userpasswd_handler}/> <br/>
   {input_psswd ? <span style={{color:'red'}}>invalid password !</span> :null}<br/><br/>
      <button type='submit' onClick={submit_handler}> submit</button>
    </form>
    </div>
  )
}

export default FormValidation
