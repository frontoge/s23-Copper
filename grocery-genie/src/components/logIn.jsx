import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/logInStyles.css"
import banner from "../images/branding/banner.png"
import {useNavigate} from "react-router-dom"

window.id = ""

function LogIn(props) {

    const [user, setUser] = useState(undefined);
    const [userID, setUserID] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    var nav = useNavigate()

    function getUserInfo() {
        fetch (
            `http://localhost:4000/api/accounts/${user}`
        )
        .then(response => response.json())
        .then(data => {
            setUserID(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    function validateSignIn() {
        getUserInfo()
        if (userID){
            nav("/household")
            window.id = userID[0]
            console.log("window.id", window.id)
            console.log(userID)
        }
    }

    window.id = userID
    console.log("window.id", window.id)
    console.log(userID)
    return (
        <Box sx={{
            position: "absolute",
            width: "20%",
            left: "20%",
            bottom: "25%",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
            gap: "0.5rem",
            alignItems: "center"

        }}>
            <img src={banner} alt={"grocery genie banner"} aria-label={"grocery genie, shop smarter."} class={"banner"}/>
            <TextField label={"Username"} color={"primary"} variant={"outlined"} type={"username"} sx={{width: "75%"}} value ={user} onChange = {(e) => {setUser(e.target.value)}}/>
            <TextField label={"Password"} color={"primary"} variant={"outlined"} type={"password"} sx={{width: "75%"}}/>
            <div className={"buttons"}>
                <Button onClick = {validateSignIn}>Log In</Button>
                <Button>Create Account</Button>
            </div>
        </Box>

    )

}


export default LogIn;