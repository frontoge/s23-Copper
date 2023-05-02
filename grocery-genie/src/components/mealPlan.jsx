import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
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

function MealPlan(props) {
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
    await fetch(`http:localhost:4000/api/mealplans/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setMealList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  

    // function changeToRecipe() {
      
    //   props.setRecipe(true)
    //   props.setMeal(false)
      
    // }
     
    // function update(index) {
  
    //     const tempCopy = [...props.mealList]
    //     tempCopy[index] = {id: "", name: ""}
    //     props.setMealList(tempCopy)
    // }

    // console.log(mealList)
    
    return (
      <div className="backgroundImage">
      <div className="mealPlanPage">
        <h1 className="title">Meal Plan</h1>
        <h2 >{startdate.getMonth() + 1}/{startdate.getDate()} - {enddate.getMonth() + 1}/{enddate.getDate()}</h2>
        <div className="backgroundImage">
      <h1 className="title">Meal Plan</h1>
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
                  <ListItem>{new Date(meal.date).toLocaleDateString()}</ListItem>
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
        { 
        /* <div className="dayOfTheWeek">
          <p className="dayLabel">
            Sunday
                 <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
  
          <div className="dayMeals">
            {!props.mealList[0].name ? null : (
              <>
                <p className="mealLabel">Breakfast</p>
                <p className="recipeName">
                  {props.mealList[0].name }
  
                  <button onClick={() => update(0)}>
                    <DeleteIcon />
                  </button>
                </p>
              </>
            )}
            {props.mealList[1].name === "" ? null : (
              <>
            <p className="mealLabel">Lunch</p>
            <p className="recipeName">
              {props.mealList[1].name}
              
                <button onClick={() => update(1)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!props.mealList[2].name ? null : (
              <>
            <p className="mealLabel">Dinner</p>
            <p className="recipeName">
              {props.mealList[2].name}
              
                <button onClick={() => update(2)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
          </div>
        </div>
  
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Monday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
          <div className="dayMeals">
            {!props.mealList[3].name ? null : (
              <>
            <p className="mealLabel">Breakfast</p>
            <p className="recipeName">
              {props.mealList[3].name}
              
                <button onClick={() => update(3)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!props.mealList[4].name ? null : ( <>
            <p className="mealLabel">Lunch</p>
            <p className="recipeName" id="sunB">
              {props.mealList[4].name}
              
                <button onClick={() => update(4)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!props.mealList[5].name ? null : ( <>
            <p className="mealLabel">Dinner</p>
            <p className="recipeName" id="sunB">
              {props.mealList[5].name}
              
                <button onClick={() => update(5)}>
                  <DeleteIcon />
                </button>
             
            </p>
            </> 
            )}
          </div>
        </div>
  
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Tuesday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
        </div>
        <div className="dayMeals">
          {!props.mealList[6].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {props.mealList[6].name}
            
              <button onClick={() => update(6)}>
                <DeleteIcon />
              </button>
            
          </p>
          </>
          )} 
          {!props.mealList[7].name? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {props.mealList[7].name}
           
              <button onClick={() => update(7)}>
                <DeleteIcon />
              </button>
            
          </p> 
          </>
          )}
          {!props.mealList[8].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {props.mealList[8].name}
            
              <button onClick={() => update(8)}>
                <DeleteIcon />
              </button>
            
          </p>
         </>
          )}
        </div>
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Wednesday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
        </div>
        <div className="dayMeals">
          {!props.mealList[9].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {props.mealList[9].name}
            
              <button onClick={() => update(9)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!props.mealList[10].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {props.mealList[10].name}
            
              <button onClick={() => update(10)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!props.mealList[11].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {props.mealList[11].name}
            
              <button onClick={() => update(11)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
        </div>
  
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Thursday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
        </div>
        <div className="dayMeals">
          {!props.mealList[12].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {props.mealList[12].name}
            
              <button onClick={() => update(12)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!props.mealList[13].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {props.mealList[13].name}
            
              <button onClick={() => update(13)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!props.mealList[14].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {props.mealList[14].name}
            
              <button onClick={() => update(14)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
        </div>
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Friday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
        </div>
        <div className="dayMeals">
          {!props.mealList[15].name  ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {props.mealList[15].name}
            
              <button onClick={() => update(15)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!props.mealList[16].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {props.mealList[16].name}
            
              <button onClick={() => update(16)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!props.mealList[17].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {props.mealList[17].name}
            
              <button onClick={() => update(17)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
        </div>
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Saturday
            <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
        </div>
        <div className="dayMeals">
          {!props.mealList[18].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {props.mealList[18].name}
            
              <button onClick={() => update(18)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!props.mealList[19].name  ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {props.mealList[19].name}
            
              <button onClick={() => update(19)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!props.mealList[20].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {props.mealList[20].name}
            
              <button onClick={() => update(20)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
        </div> */}
      </div>
      </div>
    );
  }
  
  export default MealPlan;
  