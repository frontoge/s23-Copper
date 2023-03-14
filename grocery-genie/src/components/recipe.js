import React, { useState } from "react";


function Recipe(props) {
  function changePage() {
   props.setMeal(true) 
   props.setRecipe(false)
  }
    
  const [showPopUp, setShowPopUp] = useState(false)
    const [mealId, setMealId] = useState(null);
    const [mealTemp, setMealTemp] = useState("test")
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
      temp[index] = {id: id, name: name}
      props.setMealList(temp)
      setShowPopUp(false)
    }

    function getMealData() {
        
       fetch(


        `https://api.spoonacular.com/recipes/complexSearch?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&diet=${diet}&&excludeIngredients=${exclude}`
        )
        .then(response => response.json())
        .then(data => {
            props.setMealData(data)
        })
        .catch(() => {
            console.log("error here")
        })
    }

    
  return (
    <div>
      <h1 className="title">Recipes</h1>
      <button onClick={getMealData}>Get Recipes</button>
    <div >
       
       <div className="displayRecipes">
       { 
       props.mealData ? (
          props.mealData.results.map(
            meal => 
            <div className="recipe">
              <p className="recipeNameLabel" key={meal.id}>{meal.title}</p>
              
              <img src={meal.image} onClick={() => {updateMeal(meal.title, meal.id)}}></img>
              </div>
            )
        ) : null
        }

        </div>

        {showPopUp ? (
         
        <ul className="daySelection">
          <li onClick={() => {updateMealList(mealTemp, mealId, 0)}}>Sunday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,1)}}>Sunday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,2)}} >Sunday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,3)}}>Monday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,4)}}>Monday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,5)}} >Monday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId, 6)}}>Tuesday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,7)}}>Tuesday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,8)}} >Tuesday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId, 9)}}>Wednesday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,10)}}>Wednesday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,11)}} >Wednesday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,12)}}>Thursday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,13)}}>Thursday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,14)}} >Thursday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,15)}}>Friday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,16)}}>Friday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,17)}} >Friday Dinner</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,18)}}>Saturday Breakfast</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,19)}}>Saturday Lunch</li>
          <li onClick={() => {updateMealList(mealTemp, mealId,20)}} >Saturday Dinner</li>
        </ul>
       
        ) : null
        }
      
      </div>
      <button onClick={() => {changePage()}}>Change Page</button>
    </div>
  )
}

export default Recipe;


