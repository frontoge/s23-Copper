import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { CardContent, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Heart from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

const UrlRecipe = (props) => {
    const cookies = new Cookies();
    const userData = cookies.get('login')
    const icon = useRef();
    const [subList, setSubList] = useState(false)
    const [showIngredients, setShowIngredients] = useState(null)
    const [mealId, setMealId] = useState(null);
    const [mealTemp, setMealTemp] = useState("");
    const [quantity, setQuantity] = useState(null)
    const [showPopUp, setShowPopUp] = useState(false)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)
    
    function addToMealPlan() {
        fetch(`http://localhost:4000/api/mealplans/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            owner: userData.id,
            recpieID: mealId,
            type: type,
            quantity: quantity,
            date: date,
            title: mealTemp,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
             console.log(data.message)
             props.setShowPopUp(false)
            })
             
          .catch((err) => {
            console.log(err.message);
          });
      }

      function updateMeal(title, id,  amount) {
        setMealId(id);
        setMealTemp(title);
        setQuantity(amount)
        console.log("mealId ", mealId);
        setShowPopUp(true);
      }

      function addRecipe() {
        console.log(
          "add Recipe",
          JSON.stringify(props.extractData.analyzedInstructions)
        );
  
        fetch(`http://localhost:4000/api/recipes/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            owner: userData.id,
            name: props.extractData.title,
            descrption: JSON.stringify(props.extractData.analyzedInstructions),
            ingredients: JSON.stringify(props.extractData.extendedIngredients),
            img: props.extractData.image,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

      function getSub(subString) {
        console.log("get sub ", subString)
        
        fetch(
          `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=a1f18c67ada64f37ad105b89010df3f9&&ingredientName=${subString}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") 
            setSubList(data);
            console.log("sub function ", data)
          })
          .catch(() => {
            console.log("error");
          });
      }
      function check() {
        setShowIngredients(true)
      }

      const clickHandler = () => {
        if (icon.current.style.color === "gray")
          icon.current.style.color = "red";
        else 
          icon.current.style.color = "gray";
      };

    return (
        <>
        {props.extractData ? (
          <Card //className={styles.root}
            sx={{
              width: "350px",
              boxShadow: "10px 10px 5px #afcfcf",
              marginBottom: "15px",
              backgroundColor: "#ffffff",
            }}
          >
            <CardHeader
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                height: "50px",
              }}
              title={props.extractData.title}
              onClick={() => {
                clickHandler();
              }}
              action={
                <IconButton aria-label="settings">
                  <FavoriteIcon sx={{ color: "gray" }} ref={icon}/>
                </IconButton>
              }
            />
            <CardMedia
              image={props.extractData.image}
              title={props.extractData.title}
              sx={{
                height: 0,
                paddingTop: "56.25%", // 16:9,
                marginTop: "20px",
                marginBottom: "0",
              }}
              onClick={() => {
                updateMeal(props.extractData.title, props.extractData.title, props.extractData.servings);
              }}
            />
            <CardContent sx={{height: "10px", padding: "10px"}}>
            <Button
              style={{
                marginRight: "20px",
                postion: "relative",
                bottom: "20px",
                right: "10px",
              }}
              onClick={() => {
                addRecipe();
              }}
            >
              Save
            </Button>
            <Button
              style={{
                marginRight: "20px",
                postion: "relative",
                bottom: "20px",
                right: "10px",
              }}
              onClick={() => {
                check()
              }}
            >
              Check Ingredients
            </Button></CardContent>
          </Card>
        ) : null}
<Box sx={{displayDirection: "column", position: "fixed", top: "20%", left: "30%", backgroundColor: "white", padding: "10px", border: "1px solid #afcfcf"}}>
        {showIngredients ? (
          
          props.extractData.extendedIngredients.map((item) => (
            <Box >
              <ListItem sx={{fontWeight: "bold", fontSize: "20px"}}onClick={() => {getSub(item.nameClean)}}>{ item.nameClean }</ListItem>
            </Box>
          )
          )) : null
        }</Box>

          <div className="subs">
          {subList ? (
            <>
              <h2 className="title">Substitutions</h2>
              <h2 className="title">{subList.ingredient}</h2>
              <h3>Disclaimer: Customers are responsible for verifying their substitutes.</h3>
              <hr></hr>
            </>
          ) : null}
          {subList
            ? subList.substitutes.map((subs, index) => (
                <>
                  <p className="title" onClick={() => {
                   setSubList(null)
                   setShowIngredients(false)
                  }} key={index}>
                    {subs} {index}
                  </p>

                  <br></br>
                </>
              ))
            : null}
            {showPopUp ? (
          <Box style={{position: "fixed", top: "30%", left: '25%', backgroundColor: "#ffffff"}} >
            <TextField
              label={"Date YYYY-MM-DD"}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              sx={{
                width: "45%",
                marginRight: "20px",
                "& .MuiInputLabel-root": { fontSize: "20px", color: "black" }, //styles the label
                input: {
                  color: "#468656",
                  fontWeight: "bold",
                  fontSize: "1em",
                },
              }}
              style={{
                border: "1px dotted #79b989",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            ></TextField>
            <TextField
              label={"Type i.e Breakfast Lunch or Dinner"}
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              sx={{
                width: "45%",
                marginRight: "20px",
                "& .MuiInputLabel-root": { fontSize: "20px", color: "black" }, //styles the label
                input: {
                  color: "#468656",
                  fontWeight: "bold",
                  fontSize: "1em",
                },
              }}
              style={{
                border: "1px dotted #79b989",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            ></TextField>
            <Button
              style={{
                backgroundColor: "#afcfcf",
                color: "white",
                margin: "0 10px",
              }}
              onClick={() => {
                addToMealPlan();
              }}
            >
              Add To Plan
            </Button>
          </Box>
        ) : null}
        </div>

      </>
    );
};

export default UrlRecipe;