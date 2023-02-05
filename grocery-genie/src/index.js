import React from "react"
import ReactDOM from "react-dom/client"
import logIn from './components/logIn';


class App extends React.Component {
    render(){
        return (
            <div>
                <logIn/>
            </div>
        )
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)