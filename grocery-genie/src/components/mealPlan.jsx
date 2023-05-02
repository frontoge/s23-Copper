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
  console.log(enddate.toString())
  console.log(startdate.toString())

  const [mealList, setMealList] = useState();

  const cookies = new Cookies();
  const userData = cookies.get("login");

  useEffect(() => {
    getMealPlan();
  }, []);

  async function getMealPlan() {
    await fetch('http://localhost:4000/api/mealplans/${userData.id}')
      .then((response) => response.json())
      .then((data) => {
        setMealList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}