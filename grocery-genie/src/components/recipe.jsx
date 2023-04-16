import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import Heart from "@mui/icons-material/Favorite";


function Recipe(props) {
  const [showPopUp, setShowPopUp] = useState(false)
  const [mealId, setMealId] = useState(null);
  const [mealTemp, setMealTemp] = useState("test")
  const [mealData, setMealData] = useState(null);
  const refArray = useRef([]);

  function getUpload() {
    props.setUpload(true);
    props.setRecipe(false);
  }

  const triggerHandler = (index) => {
    if (refArray.current[index].style.visibility === "visible")
      refArray.current[index].style.visibility = "hidden";
    else refArray.current[index].style.visibility = "visible";
  };

  let diet = "vegetarian";
  let exclude = "peanut,egg,diary";



  function updateMeal(title, id) {
    setMealId(id)
    setMealTemp(title)
    console.log("mealId ", mealId)
    setShowPopUp(true)
  }

  function updateMealList(name, id, index) {
    const temp = [...props.mealList]
    temp[index] = { id: id, name: name }
    props.setMealList(temp)
    setShowPopUp(false)
  }

  function getMealData() {

    fetch(


      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&diet=${diet}&&excludeIngredients=${exclude}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error here")
      })
  }

  function getMeals() {
    getMealData();
  }


  return (
    <div className="backgroundImage">
      <h1 className="title">Recipes</h1>
      <div className="buttonDisplay">

        <Button style={{
          backgroundColor: "#afcfcf", color: 'white', height: '90%', margin: '0 10px'
          }} onClick={getMeals}>Get Recipes
        </Button>
        <Button style={{
          backgroundColor: "#afcfcf", color: 'white', height: '90%', margin: '0 10px'
          }} onClick={getUpload}>Upload Recipe
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
        <div className="displayRecipes">
        {mealData
            ? mealData.results.map((meal, index) => (
                <div className="recipe">
                  <p
                    className="recipeNameLabel"
                    key={meal.id}
                    onClick={() => {
                      triggerHandler(index);
                    }}
                  >
                    {meal.title}
                  </p>

                  <Heart
                    className={meal.id}
                    style={{
                      color: "red",
                      position: "relative",
                      top: "45px",
                      zIndex: "2",
                      visibility: "hidden",
                    }}
                    ref={(ref) => {
                      refArray.current[index] = ref; 
                    }}
                  />
                  <img
                    style={{
                      position: "absoltue",
                    }}
                    src={meal.image}
                    alt={meal.title}
                    onClick={() => {
                      updateMeal(meal.title, meal.id);
                    }}
                  ></img>
                </div>
              ))
            : null}

        </div>

        {showPopUp ? (

          <ul className="daySelection">
            <li onClick={() => { updateMealList(mealTemp, mealId, 0) }}>Sunday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 1) }}>Sunday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 2) }} >Sunday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 3) }}>Monday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 4) }}>Monday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 5) }} >Monday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 6) }}>Tuesday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 7) }}>Tuesday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 8) }} >Tuesday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 9) }}>Wednesday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 10) }}>Wednesday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 11) }} >Wednesday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 12) }}>Thursday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 13) }}>Thursday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 14) }} >Thursday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 15) }}>Friday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 16) }}>Friday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 17) }} >Friday Dinner</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 18) }}>Saturday Breakfast</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 19) }}>Saturday Lunch</li>
            <li onClick={() => { updateMealList(mealTemp, mealId, 20) }} >Saturday Dinner</li>
          </ul>

        ) : null
        }

        </div>
    </div>
  )
}

export default Recipe;


