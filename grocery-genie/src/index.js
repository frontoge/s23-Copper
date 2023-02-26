import React from "react"
import ReactDOM from "react-dom/client"
/*import LogIn from "./components/logIn"*/
/*import "./styles/logInStyles.css"*/
import MealPlan from "./components/mealPlan"
import "./styles/mealPlanStyles.css"
import Recipe from "./components/recipe"
import "./styles/recipe.css"

class App extends React.Component {
    render(){
        return (
            <div>
                <MealPlan
                  mealData
                />
                <Recipe/>
            </div>
        )
    }
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)

