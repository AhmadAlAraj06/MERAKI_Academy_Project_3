import React from 'react';
import './App.css'; 
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {Link, Route } from "react-router-dom";



export default function App() {
  return (
    <>
    <div>
      <Navigation/>
      <Route exact path = "/Register" component={Register}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/Dashboard" component={Dashboard}/>

      </div>
    </>
    
  );
}
