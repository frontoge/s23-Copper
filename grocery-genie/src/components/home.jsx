import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import LogIn from "./logIn"
import "../styles/logInStyles.css"
import Household_Profile from "./household"
import "../styles/householdStyle.css"
import Grocery from "./groceryList"
import "../styles/groceryStyles.css"
import MealPlan from "./mealPlan"
import "../styles/mealPlanStyles.css"
import Recipe from "./recipe"
import "../styles/recipe.css"
import Navigation from "./navigation"
import "../styles/navigationStyles.css"
import Upload from "./upload"
import "../styles/uploadStyles.css"
import StoreRec from "./storeRecs"
import walmart from '../images/walmart_logo.png'
import kroger from '../images/kroger_logo.png'
import aldi from '../images/aldi_logo.jpg'
import "../styles/storeRecStyles.css"

import {Outlet} from "react-router-dom";

function Home(props) {
    const [mealData, setMealData] = useState(null);
    const [groceryList, setGroceryList] = useState([]);
    const [subList, setSubList] = useState(null);
    const [logIn, setLogIn] = useState(true);
    const [profile, setProfile] = useState(false);
    const [recipe, setRecipe] = useState(false);
    const [meal, setMeal] = useState(false);
    const [grocery, setGrocery] = useState(false);
    const [grSearch, setGrSearch] = useState(false);
    const [upload, setUpload] = useState(false);
    const [nav, setNav] = useState(false);
    const [sub, setSub] = useState(false);
    const [store, setStore] = useState(false);
   // const [storeList, setstoreList] = useState([]);
    const [mealList, setMealList] = useState([
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },
        { id: "", name: "" },

    ]);

    {
        return (
            <>
                <div>
                    {nav ? (<Navigation
                            setLogIn={setLogIn}
                            setProfile={setProfile}
                            setNav={setNav}
                            setRecipe={setRecipe}
                            setUpload = {setUpload}
                            setMeal={setMeal}
                            setSub={setSub}
                            setGrocery={setGrocery}
                            setStore={setStore}
                        />
                    ) : null
                    }

                    {logIn ? (
                        <LogIn
                            setLogIn={setLogIn}
                            setProfile={setProfile}
                            setNav={setNav}
                        />
                    ) : null}
                    {profile ? (
                        <Household_Profile setProfile={setProfile} setRecipe={setRecipe} />
                    ) : null}
                    {recipe ? (
                        <Recipe
                            mealData={mealData}
                            setMealData={setMealData}
                            mealList={mealList}
                            setGrocery={setGrocery}
                            setMealList={setMealList}
                            setLogIn={setLogIn}
                            setRecipe={setRecipe}
                            setUpload={setUpload}
                            recipe={recipe}
                            setMeal={setMeal}
                        />
                    ) : null}
                    {meal ? (
                        <MealPlan
                            mealList={mealList}
                            setMealList={setMealList}
                            setLogIn={setLogIn}
                            setRecipe={setRecipe}
                            setMeal={setMeal}
                            setGrocery={setGrocery}
                            setGroceryList={setGroceryList}
                            setGrSearch={setGrSearch}
                            grSearch={grSearch}
                        />
                    ) : null}
                    {grocery ? (
                        <Grocery
                            grSearch={grSearch}
                            setGrSearch={setGrSearch}
                            mealList={mealList}
                            setMealList={setMealList}
                            groceryList={groceryList}
                            setGroceryList={setGroceryList}
                            setGrocery={setGrocery}
                            setLogIn={setLogIn}
                            setUpload={setUpload}
                        />
                    ) : null}
                    {upload ? <Upload
                        setRecipe={setRecipe}
                        subList={subList}
                        setSubList={setSubList}
                        setUpload={setUpload}
                        setGrocery={setGrocery}
                        groceryList={groceryList}
                        setGroceryList={setGroceryList}
                    /> : null}
                    {store ? <StoreRec
                    groceryList={groceryList}
                    setGroceryList={setGroceryList}

                    /> : null}

                </div>
                <Outlet />
            </>
        )
    }
}

export default Home;

