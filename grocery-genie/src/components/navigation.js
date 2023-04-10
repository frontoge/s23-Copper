import React, {useState} from "react";


function Navigation(props) {
  
  function grocery() {
    props.setLogIn(false) 
    props.setRecipe(false)
    props.setGrocery(true) 
    props.setMeal(false)
    props.setSub(false) 
    props.setProfile(false)
    props.setUpload(false)
    props.setStore(false)
   }
   
   function meal() {
    props.setMeal(true) 
    props.setProfile(false)
    props.setLogIn(false) 
    props.setRecipe(false)
    props.setGrocery(false) 
    props.setSub(false) 
    props.setGrocery(false)
    props.setUpload(false)
    props.setStore(false)
   }
   function recipe() {
    props.setProfile(false)
    props.setLogIn(false) 
    props.setRecipe(true)
    props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
    props.setUpload(false)
    props.setStore(false)
   }

   function store() {
    props.setStore(true)
    props.setProfile(false)
    props.setLogIn(false) 
    props.setRecipe(false)
    props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
    props.setUpload(false)
   }

   function profile() {
    props.setProfile(true)
    props.setLogIn(false) 
    props.setRecipe(false)
    props.setGrocery(false) 
    props.setMeal(false)
    props.setSub(false) 
    props.setGrocery(false)
    props.setUpload(false)
    props.setStore(false)
   }

    
  return ( 
    <div className="nav">
      <p className="navLink" onClick={profile}>Profile</p>
      <p className="navLink" onClick={recipe}> Recipe</p>
      <p className="navLink" onClick={meal}>Meal Plan</p>  
      <p className="navLink" onClick={grocery}>Grocery List</p>
      <p className="navLink" onClick={store}>Store Recommendations</p> 
    </div>
  )
}

export default Navigation;