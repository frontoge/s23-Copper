import React from "react"
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import "./styles/logInStyles.css"
import Grocery from "./components/groceryList"
import "./styles/groceryStyles.css"

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

