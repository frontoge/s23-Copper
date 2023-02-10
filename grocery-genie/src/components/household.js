import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { white } from '@mui/material/colors';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.purple,
}));
export default function Household_Profile()
{

    return(
      <Paper sx={{ backgroundColor:'#afcfcf'}}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div" align="center">
                    My Household 
                </Typography>
            <Grid container rowSpacing={2}
                align="center"
                justify="center"
                direction="column">
                <Grid item sm={12} md={6}>
                    <List  sx={{ flexGrow: 1, maxWidth: 752, bgcolor: 'white' }}>
                                      <FormGroup>
                     <FormControlLabel control={<Checkbox/>} label="Dad" />
                     </FormGroup>
                    
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
                     <FormControlLabel control={<Checkbox/>} label="Mom" />
                     </FormGroup>
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
                     <FormControlLabel control={<Checkbox/>} label="George" />
                     </FormGroup>
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

                </Paper>
               
    );
}