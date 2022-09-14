import React from "react";
import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core';

import memories from './img/memories.png'
const App = ( ) => {
    return (
        <Container maxidth = "lg">
            <AppBar poostion = "static" color="inherit">
                <Typography variant= "h2" aling ="center"> memories </Typography>
                <img src ={memories} alt = "memories" height="60"/>
            </AppBar>
        </Container>
    );
}

export default App;