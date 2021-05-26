import React from 'react';
import './../App.css';
// import axios from "axios";


 const Register =(props) =>{
    return ( <>
    <div className="register">
        <p>Register:</p>
        <br/>
        <input className="sections" type="text" placeholder={`firstName here`}/>
        <br/>
        <input className="sections" type="text" placeholder={`lastName here`}/>
        <br/>
        <input className="sections" type="number" placeholder={`age here`}/>
        <br/>
        <input className="sections" type="text" placeholder={`country here`}/>
        <br/>
        <input className="sections" type="text" placeholder={`email here`}/>
        <br/>
        <input className="sections" type="password" placeholder={`password here`}/>
        <br/>

              <button className="register_button section">
              Register
      </button>
    </div>
    </>)

  }
  export default Register