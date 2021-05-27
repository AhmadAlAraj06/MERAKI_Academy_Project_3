import React, { useState } from 'react';
import './../App.css';
// import axios from "axios";


 const Register =(props) =>{
   const [firstName, setFirstName] = useState()
   const[lastName,setLastName]=useState()
   const[age,setAge]=useState()
   const[country,setCountry]=useState()
   const[email,setEmail]=useState()
   const[password,setPassword]=useState()

    return ( <>
    <div className="register">
        <p>Register:</p>
        <br/>
        <input className="sections" type="text" placeholder={`firstName here`}  onChange={(a)=>{setFirstName(a.target.value)}}/>
        <br/>
        <input className="sections" type="text" placeholder={`lastName here`}  onChange={(a)=>{setLastName(a.target.value)}}/>
        <br/>
        <input className="sections" type="number" placeholder={`age here`}  onChange={(a)=>{setAge(a.target.value)}}/>
        <br/>
        <input className="sections" type="text" placeholder={`country here`}  onChange={(a)=>{setCountry(a.target.value)}}/>
        <br/>
        <input className="sections" type="text" placeholder={`email here`}  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
        <input className="sections" type="password" placeholder={`password here`}  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>

              <button className="register_button section">
              Register
      </button>
    </div>
    </>)

  }
  export default Register;