import React, {useState} from "react";
import Grocery from "./groceryList"
import "../styles/groceryStyles.css"
import MealPlan from "./mealPlan"
import "../styles/mealPlanStyles.css"
import Recipe from "./recipe"
import "../styles/recipe.css"


export function  Home () {
    const [mealData, setMealData] = useState(null);
    const [mealList, setMealList] = useState([
        { id: 1, name: ""},
        { id: 2, name: ""},
        { id: 3, name: "" },
        { id: 4, name: ""},
        { id: 5, name: ""},
        { id: 6, name: "" },
        { id: 7, name: ""},
        { id: 8, name: ""},
        { id: 9, name: "" },
        { id: 10, name: ""},
        { id: 11, name: ""},
        { id: 12, name: "" },
        { id: 13, name: ""},
        { id: 14, name: ""},
        { id: 15, name: "" },
        { id: 16, name: ""},
        { id: 17, name: ""},
        { id: 18, name: "" },
        { id: 19, name: ""},
        { id: 20, name: ""},
        { id: 21, name: "" }
      ]);
      const [recipe, setRecipe] = useState(true)
      const [meal, setMeal] = useState(false) 
    {
        return (
            <div>
                <Grocery/>
                { recipe ? ( 
                <Recipe
                    mealData = {mealData}
                    setMealData = {setMealData}
                   mealList = {mealList} 
                   setMealList = {setMealList}

                   setRecipe = {setRecipe}
                   
                   setMeal = {setMeal}
                />
                ) : null}
                { meal ? (
                <MealPlan
                   mealList = {mealList} 
                   setMealList = {setMealList}

                   setRecipe = {setRecipe}
                   setMeal = {setMeal}
                   
                />
                ) : null}
            </div>
        )
    }
}