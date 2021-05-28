import React, { useState } from 'react';
import './../App.css';
import axios from "axios";



 const Register =(props) =>{
   const [firstName, setFirstName] = useState()
   const[lastName,setLastName]=useState()
   const[age,setAge]=useState()
   const[country,setCountry]=useState()
   const[email,setEmail]=useState()
   const[password,setPassword]=useState()
   const[massage,setMassage]=useState()

   const userrs = () => {
    axios.post(`http://localhost:5000/users`,{firstName,
    lastName,
    age,
    country,
    email,
    password,
  }).then((res) => {
      console.log(res.data);

      if (res.data._id) {
        setMassage(
         `The user has been created successfully`
        );
    } else {
      setMassage(
            `Error happened while register, please try again`
        );
    }

    })
    .catch((err) =>{
      console.log(err);
    })}

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


              <button className="register_button section" onClick={userrs}>
              Register
      </button>
     {massage}
         </div>
    </>)

  }
  export default Register;