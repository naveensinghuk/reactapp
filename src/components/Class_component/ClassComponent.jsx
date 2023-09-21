// What is class (statefull) components -: jab component class keyword se start hota hai and class type ka hota hai . uske ander constructor use kr stke hai class ke ander khud ke function bnkar use kr skte hai . ise statefull components bhi kha jata hai. jab ksi components ke ander state use krte hai use statefull components khaa jata hai. state sirf class components ke ander hi use kr stke hai . funtional components ke ander state use nahi kr skte hai without hooks..
// use of class components -: jab choti choti modification hoti hain tb class components use krte hain...... class component ke ander render method mendatory hota hai..........
// class component - when a component is start with class key word. and having class type. can use construction function in side the class components. can use the function in side the class component. when use a state in the component the is called state full component.
import React from 'react';
export default class ClassComponent extends React.Component {
    componentDidMount() {
      console.log('Component mounted');
    }
  
    componentWillUnmount() {
      console.log('Component unmounted');
    }
  
    render() {
      return <div>Class Component</div>;
    }
  }

  