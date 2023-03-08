import React from "react"
import ReactDOM from "react-dom/client"
import LogIn from "./components/logIn"
import "./styles/logInStyles.css"

class App extends React.Component {
    render(){
        return (
            <div>
                <LogIn/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

