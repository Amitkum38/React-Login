import React from 'react';
import './App.css';

const  App = () =>{

   const inputEvent = (event) =>{
     console.log('Clicked');
      
   };
  return (
    <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form validate-form">
          <span className="login100-form-title"> Welcome </span>
          <div className="wrap-input100 validate-input m-b-35">
            <input className="input100" type="text" name="username" placeholder="Enter Your Name" onChange={inputEvent}/>
            <span className="focus-input100" ></span>
            </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn"> Login </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default App;
