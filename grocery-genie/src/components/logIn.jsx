import React from 'react';
//import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Button } from '@mui/material';


function LogIn() {
    return (
        <div className="logInPage">
            <Box
            sx={{
            //my: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 0,
            }}>

            <h1>Grocery Genie</h1>
            <img src={require ('../images/genie_black.png')} alt = "Logo" height="400px"></img>
            <h1>Log In</h1>


            <TextField id="outlined-basic" 
            label="Username" 
            variant="outlined"
            margin="normal"/>

            <TextField id="outlined-basic" 
            label="Password" 
            variant="outlined"
            margin="normal"
            type="password"/>

            <Button variant="contained" href="/">Login</Button>
            

            </Box>
            <Outlet />
        </div>
    )
}


export default LogIn;