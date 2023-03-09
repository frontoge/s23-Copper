import React from "react"
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import "./styles/logInStyles.css"
import Grocery from "./components/groceryList"

class App extends React.Component {
    render(){
        return (
            <div>
                <Grocery/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

