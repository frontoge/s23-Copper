import React from "react"
import ReactDOM from "react-dom/client"
/*import LogIn from "./components/logIn"*/
/*import "./styles/logInStyles.css"*/
import MealPlan from "./components/mealPlan"
import "./styles/mealPlanStyles.css"

class App extends React.Component {
    render(){
        return (
            <div>
                <MealPlan/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

