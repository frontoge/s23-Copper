import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/logInStyles.css"
import banner from "../images/branding/banner.png";
import Cookies from "universal-cookie";

function LogIn(props) {

    const [user, setUser] = useState(undefined);
    const [pass, setPass] = useState(undefined);
    const cookies = new Cookies();
    const login = async () => {
        const res = await fetch(`http://localhost:4000/api/accounts/${user}`);
        if (res.status === 404){
            //Some code to display invalid login here.
        } else {
            const data = await res.json();
            cookies.set('login', {...data}, {path: "/"})

        }
    }

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
            <TextField label={"Username"} color={"primary"} variant={"outlined"} type={"username"} value={user} onChange={(e) => setUser(e.target.value)} sx={{width: "75%"}}/>
            <TextField label={"Password"} color={"primary"} variant={"outlined"} type={"password"} sx={{width: "75%"}}/>
            <div className={"buttons"}>
                <Button onClick={login}>Log In</Button>
                <Button>Create Account</Button>
            </div>
        </Box>

    )

}


export default LogIn;