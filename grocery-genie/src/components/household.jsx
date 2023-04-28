import React, { useEffect, useState, useRef } from "react";
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
import {createSearchParams, useNavigate} from "react-router-dom"
import Cookies from "universal-cookie"

function Household_Profile() {
  const [profiles, setProfiles] = useState(null);
  const [inputList, setInputList] = useState([]);
  const [diet, setDiet] = useState(null);
  const [restrictions, setRestrictions] = useState(null);
  const [status, setStatus] = useState(null);

  const cookies = new Cookies();
  const userData = cookies.get("login")


  const Profile = () => {
    const [memberInfo, setMemberInfo] = useState({
      name: "",
      diet: "",
      allergy: "",
    });


    function addMember() {
   
    console.log(memberInfo.name, memberInfo.diet, memberInfo.allergy)
     fetch(
       `http://localhost:4000/api/households/`, {
         method: "POST",
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({owner: userData.id, name: memberInfo.name, diet: memberInfo.diet, restrictions: memberInfo.allergy})
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

    const handleClickEvent = (event) => {
      event.preventDefault();
      console.log(memberInfo)
    
      addMember()
      setMemberInfo({ name: "", diet: "", allergy: "" });
   }
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
       <form onSubmit={handleClickEvent}>
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
          value={memberInfo.name}
          onChange={(e) => {
            setMemberInfo({ ...memberInfo, name: e.target.value });
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
          value={memberInfo.diet}
          onChange={(e) => {
            setMemberInfo({ ...memberInfo, diet: e.target.value });
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
          value={memberInfo.allergy}
          onChange={(e) => {
            setMemberInfo({ ...memberInfo, allergy: e.target.value });
          }}
        />
         <input type="submit" value="Submit" />
         </form >
        
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
    await fetch(`http://localhost:4000/api/households/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        createSearch(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function createSearch(data) {
    var dietString = ""
    var excludeString = ""
    data.data.forEach((item ) => {
      // if the profile is active, we'll use their diet data
      if(item.active.data[0]) { 
        // if two people have the same diet (like vegetarian),
        // don't repeat it in search string
        if(!dietString.match(item.diet)) {
          // use diet data if it isn't null
          if(item.diet !== "") {
            // if string of diets already has something in it,
            // add a comma and add the next diet to the string
            if(dietString) {
              dietString = dietString + "," + item.diet
            }
            // otherwise if the diet string is empty just 
            // set it to the diet
            else {
            dietString = item.diet
            }
          }
      
        }
      
        
        if(excludeString) {
          excludeString = excludeString + "," + item.restrictions
        }
        else {
          excludeString = item.restrictions
        }

      }

    });
    // remove all of the spaces so it will work with API call
    var revised = excludeString.split(" ").join("");
    cookies.set('restrictions', revised, {path: "/"})
    cookies.set('diet', dietString, {path: "/"})

  }


  

  function deleteMember(name) {
    fetch(
      `http://localhost:4000/api/households/${userData.id}&${name}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'}
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
  
  function updateProfile(name, diet, allergy, status) {
    if (diet === null) {
      diet = "";
    }
    if (allergy === null) {
      allergy = "";
    }
    fetch(
      `http://localhost:4000/api/households/${userData.id}&${name}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({diet: diet, restrictions: allergy, active: status.data[0]})
      }
    )
    .then(response => response.json())
       .then(data => {
         console.log(data.message)
         console.log("status is ", status)
       })
       .catch((err) => {
         console.log(err.message)
       })
  }

  function updateStatus(name, diet, allergy, status) {

    var condition = 0;
    console.log("status.data[0] ", status.data[0])
    if (status.data[0] === 1) {
      condition = 0;
    }
    else {
      console.log("triggering else")
      condition = 1;
    }
    console.log("condition: ", condition)
    fetch(
      `http://localhost:4000/api/households/${userData.id}&${name}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({diet: diet, restrictions: allergy, active: condition})
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

  function displaySwitch(name, diet, restrictions, status) {
    if (status.data[0] === 0) {
      console.log("triggering if")
      return(
        <FormControlLabel control={<Switch defaultUnchecked color="secondary" 
        onClick={() => updateStatus(name, diet, restrictions, status)}/>} label="Inactive" labelPlacement="end" sx={{alignSelf:"end"}}/>
      )
    }
    else {
      console.log("triggering else")
      return(
      <FormControlLabel control={<Switch defaultChecked color="secondary" 
      onClick={() => updateStatus(name, diet, restrictions, status)}/>} label="Active" labelPlacement="end" sx={{alignSelf:"end"}}/>
      )
    }
  }

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
                <DeleteIcon sx={{alignSelf:"start"}} onClick={() => {deleteMember(profile.name);}}></DeleteIcon>
                Name: {profile.name}
                {displaySwitch(profile.name, profile.diet, profile.restrictions, profile.active)}
              </Box>
              </ListItemText>
              </FormGroup>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box>
                  <ListItemText sx={{ backgroundColor: "#79b989", padding: "10px", fontWeight: "bold" }} disableTypography>
                    Diet: {profile.diet}
                  </ListItemText>
                  <TextField color="primary" sx={{backgroundColor: "white", input: {color: "black"}}} 
                  onChange={(diet) => setDiet(diet.target.value)}></TextField>
                  <Button variant="contained" 
                  onClick={() => {updateProfile(profile.name, diet, profile.restrictions, profile.active);}}>
                    Update Diet
                  </Button>
                </Box>
                <Box sx={{ displayDirection: "column" }}>
                  <ListItemText sx={{ backgroundColor: "#79b989", padding: "10px", fontWeight: "bold" }} disableTypography>
                    Allergies: {profile.restrictions}
                  </ListItemText>

                  <TextField color="primary" sx={{backgroundColor: "white", input: {color: "black"}}} 
                  onChange={(restrictions) => setRestrictions(restrictions.target.value)}></TextField>
                  <Button variant="contained" 
                  onClick={() => {updateProfile(profile.name, profile.diet, restrictions, profile.active);}}>
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