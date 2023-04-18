import React, {useEffect, useState} from "react";
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
import AddCircle from "@mui/icons-material/AddCircle";
import Popover from "@mui/material/Popover";
//import "../../../genieAPI/src/controllers/households";
//import "../../../genieAPI/src/server";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Household_Profile(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [profiles, setProfiles] = useState(null)

  function displayProfiles() {

    fetch(


      `http://localhost:4000/api/households/1`
    )
      .then(response => response.json())
      .then(data => {
        setProfiles(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  //componentDidMount() 


  /*displayProfiles()*/

  useEffect(() => {
   // getHousehold(1)
    displayProfiles()
    // console.log("test", test)
    console.log("profiles", profiles)
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  function addToList(l, r) {
    var a = document.getElementById(l);
    var restriction = document.getElementById(r);
    var li = document.createElement("li");
    li.setAttribute("id", restriction.value);
    li.appendChild(document.createTextNode(restriction.value));
    a.appendChild(li);
    console.log(l);
  }
  function deleteItem(l, r) {
    var a = document.getElementById(l);
    var restriction = document.getElementById(r);
    var item = document.getElementById(restriction.value);
    a.removeChild(item);
  }

  function changePage() {
     props.setRecipe(true)
     props.setProfile(false)
     props.setNav(true)
  }
  console.log("por", profiles)

  return (
    <div className="backgroundImage">
      <h1 style={{ marginTop: '0', textAlign: 'center', padding: '3%'}}>Household Profile</h1>
      <Grid container spacing={2}>
        
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>


            {profiles ? profiles.data.map((profile) => (
                <>
                  <p>{profile.name}</p>
                  <p>{profile.diet}</p>
                <p>{profile.restrictions}</p>
            
              
                </>
            )) : null}
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Dad
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <ul id="list"></ul>
                <input text="text" id="restriction" />
                <button
                  id="list"
                  onClick={() => {
                    addToList("list", "restriction");
                  }}
                  className="buttonClass"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    deleteItem("list", "restriction");
                  }}
                  className="buttonClass"
                >
                  delete
                </button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Grid>

      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Add Profile
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div class="memberform2">
          <div class="memberform1" id="memberForm">
            <form action="" class="formContainer">
              <h2>Household Member</h2>
              <label for="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                required
              />
              <button type="submit" class="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Popover>
     
    </div>
  );
}

export default Household_Profile;