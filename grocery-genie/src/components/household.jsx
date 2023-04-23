import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Icon } from "@mui/material";
import axios from 'axios';

function Household_Profile() {
  const [userId, setUserId] = useState(null);
  const [profiles, setProfiles] = useState(null);
  const [inputList, setInputList] = useState([]);
  const [name, setName] = useState(null);
  const [diet, setDiet] = useState(null);
  const [allergy, setAllergy] = useState(null);

  //const onAddBtnClick = (event) => {
  //setInputList(inputList.concat(<Profile key={Profile.length} />));
  //};

  const Profile = () => {
    return (
      <Box
        sx={{

          display: "flex",
          padding: "0.5rem",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{
            width: "20%",
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
            
          }}
          sx={{
            "& .MuiInputLabel-root": { fontSize: "25px", color: "black" }, //styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          label={"Name"}
          variant={"outlined"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          style={{
            width: "20%",
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          
            

          }}
          label={"Diet"}
          variant={"outlined"}
          sx={{
            width: "55%",
            "& .MuiInputLabel-root": { fontSize: "25px", color: "black" }, //styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={diet}
          onChange={(e) => {
            setDiet(e.target.value);
          }}
        />
        <TextField
          style={{
            width: "20%",
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
          label={"Allergies"}
          color={"primary"}
          variant={"filled"}
          sx={{
            width: "55%",
            "& .MuiInputLabel-root": { fontSize: "25px",  color: "black"}, //styles the label
            input: {color: "#468656", fontWeight: "bold", fontSize: "1.00em"}
          }}
          value={allergy}
          onChange={(e) => {
            setAllergy(e.target.value);
          }}
        />
        <Button variant="contained" onClick={addMember}>
          Create Profile
        </Button>
      </Box>
    );
  };

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Profile key={Profile.length} />));
  };

  useEffect(() => {
    //console.log("household page id", userId)
    //if(userId !== null) {
    console.log("in useEffect if");
    displayProfiles();

    //}
  }, []);

  async function displayProfiles() {
    await fetch(`http://localhost:4000/api/households/2`)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function addMember() {
     fetch(
       `http://localhost:4000/api/households/`, {
         method: "POST",
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({owner: 2, name: "Bob"})
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

   function add() {
     axios.post(`http://localhost:4000/api/households`, {
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({owner: 2, name: "Bob"})
     })
   }
  

  function deleteRestriction(allergy, index) {
    var temp = restrict;
    var temp2 = profiles;
    temp.filter((item) => {
      return item !== allergy;
    });
    restrict = temp;
    temp2[index] = temp;
    setProfiles(temp2);

    //console.log("restrict is here", restrict)
  }

  function setArr(array) {
    console.log(array);
    restrict = array.restrictions.split(",");
  }
  console.log("pro", profiles);

  var hide = false;

  return (
    <div className="backgroundImage">
      <h1 style={{ marginTop: "0", textAlign: "center", padding: "3%" }}>
        Household Profile
      </h1>

      {profiles
        ? profiles.data.map((profile, proIndex) => (
            <Box
              sx={{
                width: "80%",
                margin: "auto",
                paddingBottom: "15px",
                backgroundColor: "#cde5d3",
              }}
            >
              <FormGroup>
              <ListItemText
                sx={{
                  backgroundColor: "#79b989",
                  textAlign: "center",
                  fontSize: "1.25em",
                  padding: "5px"
                }} disableTypography
              >
                <Box sx={{display: "flex", justifyContent:"space-evenly"}}>
                <DeleteIcon sx={{alignSelf:"start"}}></DeleteIcon>
                Name: {profile.name}
                <FormControlLabel control={<Switch defaultChecked color="secondary"/>} label="Active" labelPlacement="end" sx={{alignSelf:"end"}}/>
              </Box>
              </ListItemText>
              </FormGroup>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box>
                  <ListItemText sx={{ backgroundColor: "#79b989", padding: "10px", fontWeight: "bold" }} disableTypography>
                    Diet: {profile.diet}
                  </ListItemText>
                  <TextField color="primary" sx={{backgroundColor: "white", input: {color: "black"}}}></TextField>
                  <Button variant="contained" onClick={onAddBtnClick}>
                    Update Diet
                  </Button>
                </Box>
                <Box sx={{ displayDirection: "column" }}>
                  <ListItemText sx={{ backgroundColor: "#79b989", padding: "10px", fontWeight: "bold" }} disableTypography>
                    Allergies: {profile.restrictions}
                  </ListItemText>

                  <TextField color="primary" sx={{backgroundColor: "white", input: {color: "black"}}}></TextField>
                  <Button variant="contained" onClick={onAddBtnClick}>
                    Update Allergies
                  </Button>
                </Box>
              </Box>
            </Box>
          ))
        : null}
      <Box
              sx={{
                width: "80%",
                margin: "auto",
                paddingBottom: "15px",
                
              }}
            >
      <Button variant="contained" onClick={onAddBtnClick}>
        Add Profile
      </Button>
      </Box>

      {inputList}
    </div>
  );
}

export default Household_Profile;