import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import Layout from "./components/Layout"
import {ThemeProvider} from "@mui/material/styles"
import theme from "./theme";
import Home from "./components/home";
import LogIn from "./components/logIn";


function App(props) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LogIn />} />
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

