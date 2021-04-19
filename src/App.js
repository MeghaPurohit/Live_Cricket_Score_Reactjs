import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from "./Components/Navbar";
import MyCard from './Components/MyCard';
import {getMatches} from './API/Api';
function App() {

  useEffect(() => {
    getMatches()
      .then((data) => console.log("DATA",data))
      .catch();
    }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <MyCard></MyCard>
      <h1>Welcome to my Live Score App</h1>
      
    </div>
  );
}

export default App;
