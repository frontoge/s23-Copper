import React from 'react';
import IconButton from '@mui/material/IconButton';
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
import Stack from '@mui/material/Stack';
import "../styles/householdStyle.css";

export default function Household_Profile()
{
    return(
      <Stack direction="column" spacing={2}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div" align="center">
                    Household Profile
                </Typography>
            <Grid container rowSpacing={2}
                align="center"
                justify="center"
                direction="column">
                <Grid item sm={12} md={6}>
                    <List  sx={{ flexGrow: 1, maxWidth: 752, bgcolor: 'white' }}>
                                      <FormGroup>
                     <FormControlLabel control={<Switch/>} label="Dad" />
                     </FormGroup>
                     <Typography allign='left'>
                        Diet:
                     </Typography>
                    <ListItem alignItems='center'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >
                        <ListItemText
                            primary="Vegetarian"
                        />
                        </ListItem>
                    
                    </List>
                </Grid>
             
               </Grid>

               <Grid container 
               rowSpacing={2}
               align="center"
               justify="center"
               direction="column">
                <Grid item sm={12} md={6}>
                    <List sx={{ flexGrow: 1, maxWidth: 752, bgcolor: 'white' }}>
                    <FormGroup>
                     <FormControlLabel control={<Switch/>} label="Mom" />
                     </FormGroup>
                     <Typography allign='left'>
                        Allergies:
                     </Typography>
                    <ListItem alignItems='center'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >
                        <ListItemText primary="Eggs"/>

                        </ListItem>
                        <ListItem 
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >
                        <ListItemText primary="Dairy"/>

                        </ListItem>
                        
                    
                    </List>
                </Grid>
                </Grid>
                <Grid container rowSpacing={2}
                    align="center"
                    justify="center"
                    direction="column">
                <Grid item sm={12} md={6}>
                    <List sx={{ flexGrow: 1, maxWidth: 752, bgcolor: 'white' }}>
                    <FormGroup>
                     <FormControlLabel control={<Switch/>} label="George" />
                     </FormGroup>
                     <Typography allign='left'>
                        Allergies:
                     </Typography>
                    <ListItem alignItems='center'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >
                        <ListItemText primary="Peanuts"/>

                        </ListItem>
                        
                    
                    </List>
                </Grid>

                </Grid>
                <Button variant="contained" size="medium">Add Profile</Button> 
               </Stack>
    );
}