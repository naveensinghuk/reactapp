import React from 'react'
import Get_api from '../API_Request/get_api/Get_api';
import Post_api from '../API_Request/post_api/Post_api';
import Delete_api from '../API_Request/delete_api/Delete_api';
import Put_api from '../API_Request/put_api/Put_api';
import Post_api1 from '../API_Request/post_api/Post_api1';

import Post_api2 from '../API_Request/post_api/Post_api2';
import Slider from '../Slider/Slider';
import Function_component from '../components/functional_component/Function_component';
import Component from '../components/component/Component';
import Hooks from '../React_hooks/Hooks';
import Demo from '../styles/component/demo';
import ClassComponent from '../components/Class_component/ClassComponent';
import Axios1 from '../API_Request/Axios/Axios';
import Form from '../Form_validation/Form';
const Getway_api = () => {
  const data =[
    {name:"naveen",
    age: 28,
    address:{state:"uttarakhand",
              distt:"pithoragarh",
            fulladdress:{
              vill:"rasuna",
              post_office:"rari-khuti",
              pincode:262529
            },
            user:[
              {about_user:{
                name:"naveen singh ruatela",
                mobile:6395154588
              }},
              {education:"B-tech"}
            ]
          }
    },
    {fullname:"naveen singh rautela",
      mobile: 123456789}
    ]
  return (
    <div style={{padding:'10px', margin:'20px', textAlign:'center'}}>
      
    {/* <Header/> */}
      
    
     {/* <ClassComponent/> */}
     {/* <Function_component txt="what is functional component? "/><br/> */}
     {/* <Function_component txt1="Benifit of functional componet? "/><br/> */}
     {/* <Function_component txt2="what is the main difference between function components and class components? "/><br/> */}
     {/* <Component/> */}
     {/* <Hooks/> */}
     {/* <Demo value={data}/> */}
     {/* <Axios1/> */}
     {/* <Get_api/> */}
     {/* <Slider/> */}
     {/* <Post_api/> */}
      {/* <Post_api1/>
      <Post_api2/>
      <Put_api/>
     <Delete_api/> */}
    </div>
  )
}

export default Getway_api
