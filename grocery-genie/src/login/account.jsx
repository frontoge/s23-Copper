import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import banner from "../images/branding/banner.png";
import { useNavigate } from "react-router-dom";
import validator from 'validator'

function Account() {
  const [pass, setPass] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [input, setInput] = useState(null)
  const [passwordMessage, setPasswordMessage] = useState(null)
  const [confirmMessage, setConfirmMessage] = useState(null)
  const [userMessage, setUserMessage] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)
  var nav = useNavigate()

  function changePage() {
    nav("/");
  }
 
  function createUser() {

    fetch(
      `http://localhost:4000/api/accounts/`, {
        method: "POST", 
        headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({username: user, password: pass})
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function validateInput() {
    if (pass !== confirm) {
      setConfirmMessage("Passwords do not match")
      setIsDisabled(true)
    }
    else {
      setConfirmMessage("")
    }
    if (!validator.isStrongPassword(pass, {
      minLength: 12, minLowerCase: 1, minUppercase: 1,
      minNumbers: 1, minSymbols: 1
    })) {
      setPasswordMessage("Password is not strong enough.")
      setIsDisabled(true)
      console.log("password message is", passwordMessage)
    }
    else {
      setPasswordMessage("")
    }
    if (user === null) {
      setUserMessage("Username cannot be empty")
      setIsDisabled(true)
    }
    else {
      setUserMessage("")
    }
    if (pass === confirm && validator.isStrongPassword(pass, {
      minLength: 12, minLowerCase: 1, minUppercase: 1,
      minNumbers: 1, minSymbols: 1
    }) && user !== null) {
      setIsDisabled(false)
    }
  }


  return (
    <div className="backgroundImage" style={{}}>
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={banner}
          alt={"grocery genie banner"}
          aria-label={"grocery genie, shop smarter."}
          className={"banner"}
          style={{ width: "20%", marginTop: "10%" }}
        />
         <TextField
          style={{
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          label={"Email Address"}
          variant={"filled"}
          type={"Email"}
          sx={{ width: "25%",
            "& .MuiInputLabel-root": {fontSize: "25px", color: "black"},//styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          style={{
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          label={"Username"}
          variant={"filled"}
          type={"username"}
          sx={{ width: "25%",
            "& .MuiInputLabel-root": {fontSize: "25px", color: "black"},//styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          onKeyUp={validateInput}
        />
        {userMessage === '' ? null :
        <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{userMessage}</span>}
        <TextField
          style={{
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          label={"Password"}
          color={"primary"}
          variant={"filled"}
          type={"password"}
          sx={{ width: "25%",
            "& .MuiInputLabel-root": {fontSize: "25px", color: "black"},//styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          onKeyUp={validateInput}
        />
        {passwordMessage === '' ? null :
        <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{passwordMessage}</span>}

         <TextField
          style={{
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          label={"Confirm Password"}
          variant={"filled"}
          type={"password"}
          sx={{ width: "25%",
            "& .MuiInputLabel-root": {fontSize: "25px", color: "black"},//styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
          onKeyUp={validateInput}
        />
        
          {confirmMessage === '' ? null :
            <span style={{
              fontWeight: 'bold',
              color: 'red',
          }}>{confirmMessage}</span>}
        <Button
          style={{
            backgroundColor: "#79b989",
            height: "80%",
            marginTop: "2%",
            float: "right",
            color: "white",
          }}
          onClick={() => {
            createUser()
            changePage()
          }}
          disabled = {isDisabled}
        >
          Create Account
        </Button>
 </Box>

     
        
        
    </div>
  );
}

export default Account;