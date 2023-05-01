import { useTheme } from '@emotion/react'
import { Paper, TextField, Box, Card, Typography, List, ListItem, IconButton, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import React, {useState} from 'react'
import RecipeCard from './recipeCard'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add';
import "../styles/createRecipe.css"
import { red } from '@mui/material/colors'
import Button from "@mui/material/Button";


const UnitSelect = (props) => {
    const units = ["Cups", "Lbs", "Oz", "ml", "cloves", "wedges", "tsp", "tbsp", "grams", "kg", "mg", "slices", "nests"]
    const handleChange = (event) => {
        props.onChange(event.target.value)

    }

    return (
        <Box sx={{minWidth: 128}}>
            <FormControl fullWidth>
                <InputLabel id="unitsLabel">Units</InputLabel>
                <Select
                labelId='unitsLabel'
                label="Units"
                value={props.value}
                onChange={handleChange}
                >
                    {units.map((val) => <MenuItem value={val}>{val}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
        
    )
}

const NewIngredient = (props) =>{
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [units, setUnits] = useState('')

    const handleSubmit = () => {
        props.onSubmit({name, quantity, units})
        setName('')
        setQuantity(1)
        setUnits('')
    }


    return (
        <ListItem sx={{display: "flex", gap:"0.4rem"}}>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField label="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} controlled/>
            <UnitSelect value={units} onChange={(val) => setUnits(val)}/>
            <IconButton onClick={handleSubmit} color={"success"} >
                <AddIcon />
            </IconButton>
        </ListItem>
    )
}

const NewStep = (props) =>{
    const [value, setValue] = useState('')


    const handleSubmit = () => {
        props.onSubmit(value)
        setValue('')
    }

    return (
        <ListItem sx={{display: "flex"}}>
            <TextField label={"New Step"} multiline rows={4} sx={{flexGrow: 1}} value={value} onChange={(e) => setValue(e.target.value)}/>
            <IconButton color={"success"} onClick={handleSubmit} >
                <AddIcon />
            </IconButton>
        </ListItem>
    )
}

export default function CreateRecipe(props) {
    const [name, setName] = useState("Name")
    const [desc, setDesc] = useState("Some descriptive text here")
    const [ingredients, setIngredients] = useState([])
    const [steps, setSteps] = useState(["Cook food", "Eat food"])
    const [img, setImg] = useState(undefined)

    const editorTextStyle = {
        width: "80%"
    }

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            cb(reader.result)
        };
        reader.onerror = (err) => {
            console.log(err.message)
        }
    }

    const handleNewIngredient = (obj) => {
        setIngredients((prev) => {
            return prev.concat(obj)
        })
    }

    const handleNewStep = (value) => {
        setSteps((prev) => {
            return prev.concat(value)
        })
    }

    const handleImage = (e) => {
        getBase64(Array.from(e.target.files)[0], (result) => {
            setImg(result)
        })
    }
    
    return (
        <div className='container'>
            <Box className="preview" sx={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant='h2'>Preview</Typography>
                <RecipeCard name={name} description={desc} ingredients={ingredients} steps={steps} image={img}/>
            </Box>
            <Box className="editor" sx={{
                width: "25%"
            }}>
                <Paper elevation={5} sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "1rem",
                    alignItems: "center"
                }}>
                    <Typography variant='h2' sx={{textAlign: "center"}}>Editor</Typography>
                    <TextField variant="outlined" label="Name" focused sx={editorTextStyle} value={name} onChange={(e) => setName(e.target.value)}/>
                    <TextField variant="outlined" label="Description" focused multiline rows={4} sx={editorTextStyle} value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    <Typography variant='h4' sx={{marginBottom: "0"}}>Ingredients</Typography>
                    <List sx={{marginTop: "0", width: "80%"}}>
                        {
                            ingredients.map((val) =>
                                <ListItem sx={{display: "flex"}}>
                                    <Typography variant='body1' sx={{fontSize: "13pt", flexGrow: 1}}>{val.quantity} {val.units} {val.name}</Typography>
                                    <IconButton color={"error"} >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            )
                        }
                        <NewIngredient onSubmit={handleNewIngredient}/>
                    </List>
                    <Typography variant='h4' sx={{marginBottom: "0"}}>Steps</Typography>
                    <List sx={{marginTop: "0", width: "80%"}}>
                        {
                            steps.map((val, index) =>
                                <ListItem sx={{display: "flex"}}>
                                    <Typography variant='body1' sx={{fontSize: "13pt", flexGrow: 1}}>{index + 1}. {val}</Typography>
                                    <IconButton color={"error"} >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            )
                        }
                        <NewStep onSubmit={handleNewStep}/>
                    </List>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="*.jpg" type="file" onChange={handleImage}/>
                    </Button>
                    <Button variant={"outlined"} color={"success"} sx={{marginBottom: "1rem"}}>Finish</Button>
                </Paper>
            </Box>
        </div>
        
    )
}