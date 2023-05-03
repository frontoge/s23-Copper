import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Heart from "@mui/icons-material/Favorite";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import { TextField } from "@mui/material";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItemText";
import UrlRecipe from "../components/UrlRecipe";


function Recipe() {
  const [showPopUp, setShowPopUp] = useState(false)
  const [mealId, setMealId] = useState(null);
  const [mealTemp, setMealTemp] = useState("test")
  const [mealData, setMealData] = useState(null)
  const refArray = useRef([]);
  const [url, setUrl] = useState(undefined);
  const [quantity , setQuantity] = useState(null)
  const [extractData, setExtractData] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const cookies = new Cookies();
  const dietString = cookies.get("diet");
  const excludeString = cookies.get("restrictions");
  const userData = cookies.get('login')
  const [date, setDate] = useState(null);
  const [type, setType] = useState(null);

  var move = useNavigate()

  function getUpload() {
    move("/upload")
  }

  const triggerHandler = (index) => {
    if (refArray.current[index].style.color === "gray")
      refArray.current[index].style.color = "red";
    else refArray.current[index].style.color = "gray";
  };



  function updateMeal(title, id, amount) {
    setMealId(id)
    setMealTemp(title)
    if (amount) {
      setQuantity(amount)
    }
    else {
      setQuantity(1)
    }
    console.log("mealId ", mealId)
    setShowPopUp(true)
  }

  function getMealData() {

    fetch(


      `https://api.spoonacular.com/recipes/complexSearch?apiKey=a1f18c67ada64f37ad105b89010df3f9&diet=${dietString}&excludeIngredients=${excludeString}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error here")
      })
  }

  function AddToMealPlan() {
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
         setShowPopUp(false)
        })
         
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getMealData();
  }, []);

  /*const UrlRecipe = (props) => {
    console.log("urlRecipe", props.extractData)
    const ref = useRef();

    const clickHandler = () => {
      if (ref.current.style.visibility === "visible")
        ref.current.style.visibility = "hidden";
      else ref.current.style.visibility = "visible";
    };

    const showRecipe = (event) => {
      event.preventDefault();
      extractRecipe();
      setExtractData(null);
      setUrl(null)
    };

    return (
      <>
        {props.extractData ? (
          <div onClick={clickHandler} className="recipe">
          <p className="recipeNameLabel" key={props.extractData.title}>
            {props.extractData.title}
          </p>

          <Heart
            //className={}
            style={{
              color: "red",
              position: "relative",
              top: "45px",
              zIndex: "2",
              visibility: "hidden",
            }}
            ref={ref} 
          />
          <img
            src={props.extractData.image}
            alt={props.extractData.title}
          ></img><button style={{marginRight: "20px", postion: "relative", bottom: "20px", right: "10px"}}  onClick={() => {addRecipe()}}>Save</button>
        </div>) : null}
        
      </>
    );
  };*/

  const onShowRecipe = (event) => {
    setRecipeList(recipeList.concat(<UrlRecipe extractData= {extractData} key={UrlRecipe.length} />));
  };

  function extractRecipe() {
    console.log(url);

    fetch(
      `https://api.spoonacular.com/recipes/extract?apiKey=a1f18c67ada64f37ad105b89010df3f9&url=${url}`
    )
      .then((response) => response.json())
      .then((data) => {
        setExtractData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function test(event) {
   // onShowRecipe(event)
    extractRecipe()
    onShowRecipe(event)
   // setUrl(null)

  }

  return (
    <div>
      <h1 className="title">Recipes</h1>
      <div style={{display: "flex", justifyContent: "flex-start"}}>
      <TextField
          label={"recipe URL"}
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          sx={{
            width: "45%", marginRight: "20px",
            "& .MuiInputLabel-root": { fontSize: "20px", color: "black" }, //styles the label
            input: { color: "#468656", fontWeight: "bold", fontSize: "1em" },
          }}
          style={{
            border: "1px dotted #79b989",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        ></TextField>
        

      <Button style={{backgroundColor: "#afcfcf", color: "white", margin: "0 10px"}} onClick={(e) => {test(e)}}>Extract</Button>

      </div>


      <div className="buttonDisplay">

        <Button style={{
          backgroundColor: "#afcfcf", color: 'white', height: '90%', margin: '0 10px'
          }} onClick={getUpload}>My Recipes
        </Button>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            component="span"
            style={{
              backgroundColor: "#afcfcf",
              margin: '0 10px'
            }} 
          >
            Upload
          </Button>
        </label>
        <h3> OR </h3>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          style={{ display: "none" }}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{
              color: "#afcfcf",
              height: "100%",
              marginRight: '40px'
            }}
          >
            <PhotoCamera />
          </IconButton>
        </label>
        </div>

        <div style={{ clear: "right" }}>
        <div style={{display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-around", 
        alignItems: "flex-end"}}>

        {recipeList}
          {mealData
            ? mealData.results.map((meal, index) => (
                <Card //className={styles.root}
                  sx={{
                    width: "350px",
                    boxShadow: "10px 10px 5px #afcfcf",
                    marginBottom: "15px",
                    backgroundColor: "#ffffff",
                  }}
                  key={meal.recpieID}
                >
                  <CardHeader
                    sx={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      height: "50px",
                    }}
                    title={meal.title}
                    onClick={() => {
                      triggerHandler(index);
                    }}
                    action={
                      <IconButton aria-label="settings">
                        <FavoriteIcon
                          sx={{ color: "gray" }}
                          ref={(ref) => {
                            refArray.current[index] = ref;
                          }}
                        />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    image={meal.image}
                    title={meal.title}
                    sx={{
                      height: 0,
                      paddingTop: "56.25%", // 16:9,
                      marginTop: "20px",
                      marginBottom: "0",
                    }}
                    onClick={() => {
                      updateMeal(meal.title, meal.id, meal.servings);
                    }}
                  />
                  <CardContent sx={{height: "10px", padding: "10px"}}></CardContent>
                </Card>
              ))
            : null}
        </div>

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
                AddToMealPlan();
              }}
            >
              Add To Plan
            </Button>
          </Box>
        ) : null}
      </div>
    </div>
  );
}

export default Recipe;


