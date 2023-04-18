import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import Layout from "./components/Layout"
import {ThemeProvider} from "@mui/material/styles"
import theme from "./theme";
import LogIn from "./components/logIn";
import GroceryList from "./components/groceryList";
import Household_Profile from "./components/household";
import Recipe from "./components/recipe";
import MealPlan from "./components/mealPlan";
import StoreRec from "./components/storeRecs";
import {Settings} from "./components/settings";


function App(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<LogIn />} />
            <Route path="/" element={<Layout />}>
                <Route path={"grocerylist"} element={<GroceryList />}></Route>
                <Route path={"household"} element={<Household_Profile />}></Route>
                <Route path={"recipes"} element={<Recipe />}></Route>
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

