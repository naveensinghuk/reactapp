import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './popup/Popup';
import Main_Components from './Redux_Get_way/Main_Components';
import Getway_api from './getway_api/Getway_api';
import FormGetway from './Form_Getway/FormGetway';
import Demo_getway from './demo/Demo_getway';
// import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Error from './Error';
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className='container'>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/contact' Component={Contact}/> 
      {/* <Route Component={Error}/> */}
    </Routes>
    {/* <Home/>
    <Contact/> */}
    {/* <Header/> */}
    {/* <Main_Components/> */}
      {/* <Demo_getway/> */}
      {/* <Getway_api/> */}
      {/* <FormGetway/> */}
      
      {/* <button onClick={openPopup}>Open Popup</button> */}
      {/* <FormComponent isOpen={isPopupOpen} onClose={closePopup} /> */}
  
  
      </div>
  )
}

export default App; 
