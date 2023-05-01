import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import Layout from "./extras/components/Layout"
import {ThemeProvider} from "@mui/material/styles"
import theme from "./theme";
import LogIn from "./login/logIn";
import GroceryList from "./groceries/groceryList";
import MealPlan from "./mealplan/mealPlan";
import StoreRec from "./stores/storeRecs";
import Account from "./login/account"
import {Settings} from "./extras/components/settings";
import Upload from "./recipes/upload";
import Household_Profile from "./household/household";
import Recipe from "./recipes/recipe";
import RecipeCard from "./recipes/components/recipeCard";
import CreateRecipe from "./recipes/components/createRecipe";

function App(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={"/login"} element={<LogIn />} />
            <Route path={"/account"} element={<Account />}></Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Household_Profile />}></Route>
                <Route path={"grocerylist"} element={<GroceryList />}></Route>
                <Route path={"recipes"} element={<Recipe />}></Route>
                <Route path={"recipes/create"} element={<CreateRecipe/>}></Route>
                <Route path={"upload"} element={<Upload />}></Route>
                <Route path={"mealplan"} element={<MealPlan />}></Route>
                <Route path={"stores"} element={<StoreRec />}></Route>
                <Route path={"settings"} element={<Settings />}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
)

