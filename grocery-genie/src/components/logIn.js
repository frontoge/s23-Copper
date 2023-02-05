import React from 'react';
//import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function LogIn() {
    return (
        <div className = "test">
            <Box
            sx={{
            //my: 10,
            //backgroundColor: '#afcfcf',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 1,
            }}>

            <h1>Grocery Genie</h1>
            <h1>Log In</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            </Box>
        </div>
    )
}


export default LogIn;