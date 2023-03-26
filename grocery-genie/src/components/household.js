import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Switch from '@mui/material/Switch';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Icon } from '@mui/material';
import AddCircle from '@mui/icons-material/AddCircle';

 function Household_Profile(){

 function addToList(){
  var a = document.getElementById("list");
  var restriction = document.getElementById("restriction");
  var li = document.createElement("li");
  li.setAttribute('id', restriction.value);
  li.appendChild(document.createTextNode(restriction.value))
  a.appendChild(li);
  
 }
function deleteItem(){
  var a = document.getElementById("list");
  var restriction = document.getElementById("restriction");
  var item = document.getElementById(restriction.value);
  a.removeChild(item); 
}
  

    return(
     
      <Stack direction="column" spacing={2}>
               <ul id = "list" ></ul>
               <input text="text" id="restriction"/>
               <button onClick={addToList} class="buttonClass">Add</button>
               <button onClick={deleteItem} class="buttonClass">delete</button>
                <Button variant="contained" size="medium">Add Profile</Button> 
               </Stack>
    );
}
export default Household_Profile;