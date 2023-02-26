
import React, { useState } from "react";

function Recipe() {
    const [mealData, setMealData] = useState(null)
   

    function getMealData() {
        
       fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=28ae15fcd30248a7bdf22580850a23be&&diet=vegetarian`
        )
        .then(response => response.json())
        .then(data => {
            setMealData(data)
        })
        .catch(() => {
            console.log("error")
        })
    }

    
  return (
    <div >
       <button onClick={getMealData}>Get Recipes</button>
       <div className="test">
       { 
       mealData ? (
          mealData.results.map(
            meal =>
              <p className="recipe" key={meal.id}><label>{meal.title} </label><br></br>
              <img src={meal.image}></img></p>
            )
        ) : null
        }
    
      </div>

    </div>
  )
}

export default Recipe;
