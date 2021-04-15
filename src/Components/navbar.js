import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";


function App(){
    return (
   <div className="App">
       <Navbar></Navbar>
       <h1>Welcome to My Live Score App</h1>
   </div>
    );
}
export default App;