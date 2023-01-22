import React from "react"
import ReactDOM from "react-dom/client"

class App extends React.Component {
    render(){
        return (
            <div>
                Content is here!
            </div>
        )
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
)