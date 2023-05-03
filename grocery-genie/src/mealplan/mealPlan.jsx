import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Cookies from "universal-cookie";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

function SetDate(start){
  const date = new Date()
  if (start){
    date.setDate(date.getDate() - date.getDay())
  }
  else {
    date.setDate(date.getDate() + (6 - date.getDay()))
  }
  return date
}

function MealPlan() {
  const d = new Date()
  const [startdate, setstartDate] = useState(SetDate(true))
  const [enddate, setendDate] = useState(SetDate(false))
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  console.log(enddate.toString())
  console.log(startdate.toString())

  const [mealList, setMealList] = useState();

  const cookies = new Cookies();
  const userData = cookies.get("login");

  useEffect(() => {
    getMealPlan();
  }, []);

  async function getMealPlan() {
    await fetch(`http://localhost:4000/api/mealplans/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setMealList(data);
        console.log("data is ", data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function deleteMeal(id) {
    console.log("id", id)
    fetch(`http://localhost:4000/api/mealplans/${userData.id}&${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


return (
  <div>
  <div className="mealPlanPage">
    <h1 style={{textAlign: "center"}}>Meal Plan</h1>
    <h2 style={{textAlign: "center"}}>{startdate.getMonth() + 1}/{startdate.getDate()} - {enddate.getMonth() + 1}/{enddate.getDate()}</h2>
    <div className="backgroundImage">
  {mealList
    ? mealList.data.map((meal, index) => (
        <>
          <Box key={meal.recipieID}
            sx={{
              displayDirection: "column",
              margin: "auto",
              width: "50%",
              backgroundColor: "white",
              marginTop: "10px",
              border: "2px solid #afcfcf",
              borderRadius: "10px",
              padding: "15px"
            }}
          >
            <Box sx={{ display: "flex" }}>
            <ListItem>{new Date(meal.date).toLocaleDateString(undefined, options)}</ListItem>
              <ListItem>{meal.type}</ListItem>
            </Box>
            <Box sx={{ display: "flex" }}>
              <ListItem>{meal.title}</ListItem>
              <Button onClick={() => update(0)}>

                <DeleteIcon onClick={() => deleteMeal(meal.recpieID)} />
              </Button>
            </Box>
          </Box>
        </>
      ))
    : null}
</div>
    
      </div>
      </div>
    );
  
          
          }      
  export default MealPlan;