import React from "react"
import ReactDOM from "react-dom/client"
import Household_Profile from "./components/household"
class App extends React.Component {
    render(){
        return (
            <div>
                <Household_Profile/>
            </div>
        )
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)