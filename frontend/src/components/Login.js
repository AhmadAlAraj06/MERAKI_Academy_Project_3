import React,{useState} from 'react';
import './../App.css';
import axios from "axios";

function Login(){
const[email,setEmail]=useState()
const[massage,setMassage]=useState()
const[password,setPassword]=useState()

const login = ()=>{
    axios.post(`http://localhost:5000/login`,{
        email,
        password,
    })
    .then((res)=>{
       // setMassage("The login successfully")
    // console.log("The login successfully")
    console.log(res.data);

    if (res.data.token) {
      setMassage(
       `the login successfully`
      );
  } else{
    setMassage(
          `the login failed`
      );
   
    }
})
     
        .catch((err) =>{
        // setMassage("The login failed")
        // console.log("The login failed")
          
        console.log(err);
          })}


return(<div className="register">
    <p>Login:</p>
    <input className="sections" type="text" placeholder={`email here`}  onChange={(a)=>{setEmail(a.target.value)}}/>
        <br/>
        <input className="sections" type="password" placeholder={`password here`}  onChange={(a)=>{setPassword(a.target.value)}}/>
        <br/>
 
<button className="register_button section" onClick={login}>
    Login
</button>
{massage}

</div>)
}


export default Login

