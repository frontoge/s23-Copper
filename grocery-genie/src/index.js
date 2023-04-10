import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import "./styles/logInStyles.css"
import Household_Profile from "./components/household"
import "./styles/householdStyle.css"
import Grocery from "./components/groceryList"
import "./styles/groceryStyles.css"
import MealPlan from "./components/mealPlan"
import "./styles/mealPlanStyles.css"
import Recipe from "./components/recipe"
import "./styles/recipe.css"
import Navigation from "./components/navigation"
import "./styles/navigationStyles.css"
import Upload from "./components/upload"
import "./styles/uploadStyles.css"
import StoreRec from "./components/storeRecs"
import "./styles/storeRecStyles.css"

function App() {
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
                /> : null}

            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)