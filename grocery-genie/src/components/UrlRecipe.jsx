import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { CardContent, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItemText";

const UrlRecipe = (props) => {
    const cookies = new Cookies();
    const userData = cookies.get('login')
    const icon = useRef();
    const [subList, setSubList] = useState(false)
    const [showIngredients, setShowIngredients] = useState(null)
    const [mealId, setMealId] = useState(null);
    const [mealTemp, setMealTemp] = useState("");
    const [quantity, setQuantity] = useState(null)
    const [showPopUp, setShowPopUp] = useState(false)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)
    
    unction addToMealPlan() {
        fetch(`http://localhost:4000/api/mealplans/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            owner: userData.id,
            recpieID: mealId,
            type: type,
            quantity: quantity,
            date: date,
            title: mealTemp,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
             console.log(data.message)
             props.setShowPopUp(false)
            })
             
          .catch((err) => {
            console.log(err.message);
          });
      }

      function updateMeal(title, id,  amount) {
        setMealId(id);
        setMealTemp(title);
        setQuantity(amount)
        console.log("mealId ", mealId);
        setShowPopUp(true);
      }
      
    return (

    );
};

export default UrlRecipe;