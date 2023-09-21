import React from "react";
import './home.css'
const Home = () => {
  return (
    <div>
      <h1>Home Components</h1>
      <div className="card-wrapper" style={{
      display:'flex',
      flexDirection:'row',
      padding: '20px 20px',
      margin: '20px 20px',
      border: '2px solid black',
      width:'700px'
      }}>
        <div className="img-wrapper item">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
            width={"100px"}
            height={"100px"}
          />
        </div>
        <div className="text-wrapper item" style={{padding: '20px 20px', margin: '20px 20px', backgroundColor:'green'}}>
          <span> Mountains</span>
          <span> Mountains:with beautition</span>
        </div>
        <div className="btn-wrapper item" >
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
