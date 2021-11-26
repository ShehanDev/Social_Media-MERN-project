 import React from 'react';
 import memories from './images/memories.png';
 import {Container , AppBar, Typography , Grow , Grid } from '@material-ui/core';

 const App = () => {
     return(
         //using metrial ui componets 
       <Container maxwidth='lg'>
           <AppBar position='static' color='inherit'>
               <Typography varient="h3" align="center" gutterBottom component="div">Social Meadia</Typography>
               <img src={memories}  alt="Memories" height="60"></img>
           </AppBar>
           <Grow in>
               <Container>
               <Grid container justify="space-between" alt></Grid>  
               </Container>
            </Grow>


       </Container>
     );
 }

 export default App;