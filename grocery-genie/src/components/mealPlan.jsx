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

}