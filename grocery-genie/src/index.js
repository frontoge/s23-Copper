import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import Layout from "./components/Layout"
import "./styles/logInStyles.css"

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<LogIn />}/>
                    <Route path='home' element={<Layout />} />
                </Route>
            </Routes>
            </BrowserRouter>
            
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

