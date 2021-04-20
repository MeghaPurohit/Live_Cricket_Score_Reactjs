import React, { useEffect, useState } from "react";
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from "./Components/Navbar";

import MyCard from "./Components/MyCard";
import {getMatches} from './API/Api';
import {
  Grid
} from "@material-ui/core";
function App() {
  const [matches,setMatches] = useState([]);
  

  useEffect(() => {
    getMatches()
      .then((data) => setMatches(data.matches))
      .catch();
    }, []);

  return (
    <div className="App">
      <Navbar/>
      <h1>Welcome to my Live Score App</h1>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
        {
        matches.map((match)=>(
          <MyCard match="match"/>
        ))
      }

        </Grid>

      </Grid>
    </div>
  );
}

export default App;
