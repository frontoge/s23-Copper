import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import Layout from "./components/Layout"
import "./styles/logInStyles.css"
import Household_Profile from "./components/household";
import {Settings} from "./components/settings";
import Home from "./components/home";
import Grocery from "./components/groceryList";
import Recipe from "./components/recipe";


function App(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login">
                <Route index element={<LogIn />}/>
            </Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Household_Profile />} />
                <Route path="/home" element={<Home />} />
                <Route path="/grocery" element={<Grocery />} />
                <Route path={"/settings"} element={<Settings />} />
                <Route path={"/recipes"} element={<Recipe />} />
            </Route>
        </Routes>
        </BrowserRouter>

    )
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

