import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/logInStyles.css"
import banner from "../images/branding/banner.png"
import {useNavigate} from "react-router-dom"

window.mealList = [
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
    {id: "", name: "", ingredients: {}},
]

function LogIn(props) {

    const [user, setUser] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    const [userInfo, setUserInfo] = useState(undefined);
    const [showForgotPassword, setShowForgotPassword] =useState(false)
    var nav = useNavigate()

    localStorage.setItem('meal', JSON.stringify(window.mealList));


    async function getUserInfo() {
        await fetch (
            `http://localhost:4000/api/accounts/${user}`
        )
        .then(response => response.json())
        .then(data => {
            setUserInfo(data)
            localStorage.setItem('User_ID', JSON.stringify(data.id))

            console.log("get data function", localStorage.getItem('User_ID'))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    function validateSignIn() {
        if (user) {
            getUserInfo()
        }
        if (userInfo) {
            nav("/household")
        }
    }

    function forgotPassword() {
        setShowForgotPassword(true)
    }

    function closePopup() {
        setShowForgotPassword(false)
    }

    function create() {
        nav("/account")
    }

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <Box sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "center"

        }}>
            <img src={banner} alt={"grocery genie banner"} aria-label={"grocery genie, shop smarter."} class={"banner"}/>
            <TextField label={"Username"} color={"primary"} variant={"outlined"} type={"username"} sx={{width: "75%", border: "1px dotted #79b989", "& .MuiInputLabel-root": { fontSize: "25px", color: "black" }, 
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.25em"}}} value ={user} onChange = {(e) => {setUser(e.target.value)}}/>
            <TextField label={"Password"} color={"primary"} variant={"outlined"} type={"password"} sx={{width: "75%", border: "1px dotted #79b989", "& .MuiInputLabel-root": { fontSize: "25px", color: "black" }, 
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.25em"}}}/>
            <Box>
            <div className={"buttons"}>
                <Button onClick = {validateSignIn}>Log In</Button>
                <Button onClick = {forgotPassword}>Forgot Password?</Button>
                <Button onClick= {create}>Create Account</Button>
            </div>
            </Box>
        </Box>
        { showForgotPassword ? (
        <Box sx={{position: "fixed", margin: "auto", backgroundColor: "white", display: "block", justifyContent: "center"}}>
            <p>We will send you an email with a link to reset your password</p>
            <TextField label={"Email Address"} color={"primary"} variant ={"outlined"} sx={{marginLeft: "25%", border: "1px solid #79b989", input: {color: "#468656", fontWeight: "bold", fontSize: "1.25em"}}}></TextField> <br></br>
            <Button onClick={closePopup} sx={{marginLeft: "40%"}}>Send</Button>
        </Box>
        ) : null }
        </Box>


    )

}


export default LogIn;