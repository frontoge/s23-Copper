import { Typography, Card, Divider, CardHeader, CardMedia, CardContent, CardActions, IconButton, Collapse, ListItem, List } from "@mui/material";
import React from "react";
import Template from '../../images/garlicButterWing.jpg'
import "../styles/recipeCard.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles';

//This is taken from the example on the MUI docs https://mui.com/material-ui/react-card/
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function RecipeCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card sx={{
            width: "25rem",
            alignItems: "center",
        }}>
            <CardHeader title={props.name}/>
            <CardMedia 
            component="img" 
            height={194}
            image={props.image ? `data:image/jpeg;base64,${props.image}` : undefined}
            alt="Recipe image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit >
                <CardContent>
                    <Typography variant="h5" sx={{marginBottom: "0.1rem"}}>Ingredients:</Typography>
                    <List sx={{paddingTop: "0"}}>
                        {props.ingredients.map((value) =>
                            <Typography ListItem>{value.quantity} {value.units} {value.name}</Typography>
                        )}
                    </List>
                    <Typography variant="h5" sx={{marginBottom: "0.1rem", marginTop: "0.5rem"}}>Steps</Typography>
                    <List sx={{paddingTop: "0"}}>
                        {props.steps.map((value, index) =>
                            <Typography ListItem>{index + 1}. {value}</Typography>
                        )}
                    </List>
                </CardContent>
            </Collapse>
        </Card>
    )
}