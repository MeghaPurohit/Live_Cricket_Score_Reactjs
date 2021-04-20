import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  
  const MyCard =()=>{
  
      const getMyCard= ()=>{
          return(
              
              <Card style={{ marginTop: 15}}>
                   <CardContent>
            <Grid container justify="center" alignItems="center" spacing={4}>
              <Grid item>
                <Typography variant="h5">First Team</Typography>
              </Grid>
              <Grid item>
                  <img
                  style={{ width: 85}}
                  src={require("../img/mg.png")}
                  alt=""
                  />
              </Grid>
              <Grid item>
                <Typography variant="h5">Second Team</Typography>
              </Grid>
            </Grid>
          </CardContent>
                  <CardActions>
                      <Grid container justify="center" >
                          <Button style={{ marginLeft: 10 }} item variant="contained" color="primary"> Show Details</Button>
                      <Button style={{ marginLeft: 10 }} item variant="contained" color="primary">{new Date().toString()}</Button>
                      </Grid>
                      
                  </CardActions>
              </Card>
          );
      }
          return getMyCard();
  
  }
  export default MyCard;