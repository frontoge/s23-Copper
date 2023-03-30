import React, { useState, useEffect } from "react";


function Navigation(props) {
  function logIn() {
   props.setLogIn(true) 
   props.setRecipe(false)
   props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
    props.setProfile(false)
  }
  function grocery() {
    props.setLogIn(false) 
   props.setRecipe(false)
   props.setGrocery(true) 
    props.setMeal(false)
    props.setSub(false) 
    props.setProfile(false)
   }
   function profile() {
    props.setProfile(true)
    props.setLogIn(false) 
   props.setRecipe(false)
   props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
   }
   function meal() {
    props.setMeal(true) 
    props.setProfile(false)
    props.setLogIn(false) 
    props.setRecipe(false)
    props.setGrocery(false) 
    props.setSub(false) 
    props.setGrocery(false)
   }
   function recipe() {
    props.setProfile(false)
    props.setLogIn(false) 
    props.setRecipe(true)
    props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
   }

    
  return ( 
    <div className="nav">
      <p className="navLink" onClick={logIn}>Log In</p>
      <p className="navLink" onClick={profile}>Profile</p>
      <p className="navLink" onClick={recipe}> Recipe</p>
      <p className="navLink" onClick={meal}>Meal Plan</p>
      <p className="navLink" onClick={grocery}>Grocery List</p>
    </div>
  )
}

export default Navigation;