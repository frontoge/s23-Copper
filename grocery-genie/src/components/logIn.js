import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


function LogIn(props) {
    function changeProfile() {
        props.setLogIn(false)
        props.setProfile(true)
        props.setNav(true)
    }
    function changeAccount() {
        props.setLogIn(false)
        props.setAccount(true)
    }
    return (
        <div className="logInPage">
            <div style= {{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 0,
            }}>

            <h1 className="logInTitle">Grocery Genie</h1>
            <img className="logoImg" src={require ('../images/genie_outline_gr.png')} alt = "Logo" ></img>
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

            <div style= {{
                display: 'flex',
                justifyContent: 'space-between'
            }}><Button onClick={() => {changeProfile()}}>Log In</Button>
               <Button onClick={() => {changeAccount()}}>Create Account</Button>
            </div>
            </Box>


            <img className="manShopping" src={require ('../images/MamShopping.png')} alt = "Logo" ></img>
        </div>
        </div>
    )
}


export default LogIn;