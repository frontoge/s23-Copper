import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import banner from "../images/branding/banner.png";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Account() {
  const [pass, setPass] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [input, setInput] = useState(null)
  var nav = useNavigate()

  function changePage() {
    nav("/");
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
        />
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
        />
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
        />
        <Button
          style={{
            backgroundColor: "#79b989",
            height: "80%",
            marginTop: "2%",
            float: "right",
            color: "white",
          }}
          onClick={() => {
            changePage();
          }}
        >
          Create Account
        </Button>
 </Box>

     
        
        
    </div>
  );
}

export default Account;