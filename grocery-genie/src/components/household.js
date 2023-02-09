import React from 'react';
import AddIcon from "@mui/icons-material/Add";
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
import { purple } from '@mui/material/colors';


export default function Household_Profile()
{
    const back = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.backgroundColor.paper,
      }));
    return(
        <Box sx={{ flexGrow: 1, maxWidth: 752}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Dad
                </Typography>
                <back>
                    <List>
                    <ListItem
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
                    </back>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Mom
                </Typography>
                <back>
                    <List>
                    <ListItem 
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
                    </back>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    George
                </Typography>
                <back>
                    <List>
                    <ListItem 
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  >
                        <ListItemText primary="Peanuts"/>

                        </ListItem>
                        
                    
                    </List>
                    </back>
                </Grid>
                </Grid>
                </Box>
    

    );
}