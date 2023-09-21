
import React from 'react';

const Function_component = (props) => {
    const test=()=>{
        alert("functional component is normaly start with function key word . that is called functional component.functional components also known as stateless component.")
    };
    const test1=()=>{
        alert("Limited code require for function compoents.No need to construnction function and no need to render method as like class compoents.Function compoents known as state less compoents.")
    }
    const test2=()=>{
        alert("Limited code require for function compoents.No need to construnction function and no need to render method as like class compoents.Function compoents known as state less compoents.")
    }
  return (
    <div>
      <button onClick={test}>{props.txt}</button><hr/>
      <button onClick={test1}>{props.txt1}</button><br/>
      <button onClick={test2}>{props.txt2}</button>
    </div>
  )
}

export default Function_component
