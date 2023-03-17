import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import Layout from "./components/Layout"
import "./styles/logInStyles.css"
import Household_Profile from "./components/household";
import {Settings} from "./components/settings";

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/login">
                    <Route index element={<LogIn />}/>
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Household_Profile />} />
                    <Route path={"/settings"} element={<Settings />} />

                </Route>
            </Routes>
            </BrowserRouter>
            
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

