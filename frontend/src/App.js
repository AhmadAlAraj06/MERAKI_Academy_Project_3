import React from 'react';
import './App.css'; 
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import {Link, Route } from "react-router-dom";



export default function App() {
  return (
    <>
    <div>
      <Navigation/>
      <Route exact path = "/Register" component={Register}/>
      <Route exact path = "/login" component={Login}/>

      </div>
    </>
    
  );
}
