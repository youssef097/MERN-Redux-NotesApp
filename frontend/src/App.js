import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Route,Redirect } from "react-router-dom"

import SidebarComponent from "./componets/SidebarComponent"
import HeaderComponent from './componets/HeaderComponent';



import HomeScreen from "./screens/HomeScreen"
import WelcomeScreen from "./screens/WelcomeScreen"

function App(props) {
  
  const userSignIn = useSelector(state => state.userSignIn)
    
  

  return (
    <div className="wrapper">
      <Router>
        {userSignIn.token?<Redirect to="/home"/>:<Redirect to="/register"/>}
        <SidebarComponent />
        <div className="main">
          <HeaderComponent />
          <Route path="/register"  component={WelcomeScreen} />
          <Route path="/login"  component={WelcomeScreen} />
          <Route path="/home" component={HomeScreen} />          

        </div>
      </Router>
    </div>
  );
}

export default App;
