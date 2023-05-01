import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';



function MealPlan() {
  const [mealList, setMealList] = useState(JSON.parse(localStorage.getItem('meal')))

     
    function update(index) {
  
        const tempCopy = [...mealList]
        tempCopy[index] = {id: "", name: ""}
        setMealList(tempCopy)
        localStorage.setItem('meal', JSON.stringify(mealList))
    }

    function changeToRecipe() {

    }

    console.log(mealList)
    
    return (
      <div className="backgroundImage">
      <div className="mealPlanPage">
        <h1 className="title">Meal Plan</h1>
        <div className="dayOfTheWeek">
          <p className="dayLabel">
            Sunday
                 <AddBoxIcon className="dayLabelAdd" onClick={changeToRecipe} sx={{ color: "black" }} /> 
          </p>
  
          <div className="dayMeals">
            {!mealList[0].name ? null : (
              <>
                <p className="mealLabel">Breakfast</p>
                <p className="recipeName">
                  {mealList[0].name }
  
                  <button onClick={() => update(0)}>
                    <DeleteIcon />
                  </button>
                </p>
              </>
            )}
            {mealList[1].name === "" ? null : (
              <>
            <p className="mealLabel">Lunch</p>
            <p className="recipeName">
              {mealList[1].name}
              
                <button onClick={() => update(1)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!mealList[2].name ? null : (
              <>
            <p className="mealLabel">Dinner</p>
            <p className="recipeName">
              {mealList[2].name}
              
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
            {!mealList[3].name ? null : (
              <>
            <p className="mealLabel">Breakfast</p>
            <p className="recipeName">
              {mealList[3].name}
              
                <button onClick={() => update(3)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!mealList[4].name ? null : ( <>
            <p className="mealLabel">Lunch</p>
            <p className="recipeName" id="sunB">
              {mealList[4].name}
              
                <button onClick={() => update(4)}>
                  <DeleteIcon />
                </button>
              
            </p>
            </>
            )}
            {!mealList[5].name ? null : ( <>
            <p className="mealLabel">Dinner</p>
            <p className="recipeName" id="sunB">
              {mealList[5].name}
              
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
          {!mealList[6].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {mealList[6].name}
            
              <button onClick={() => update(6)}>
                <DeleteIcon />
              </button>
            
          </p>
          </>
          )} 
          {!mealList[7].name? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {mealList[7].name}
           
              <button onClick={() => update(7)}>
                <DeleteIcon />
              </button>
            
          </p> 
          </>
          )}
          {!mealList[8].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {mealList[8].name}
            
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
          {!mealList[9].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {mealList[9].name}
            
              <button onClick={() => update(9)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!mealList[10].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {mealList[10].name}
            
              <button onClick={() => update(10)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!mealList[11].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {mealList[11].name}
            
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
          {!mealList[12].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {mealList[12].name}
            
              <button onClick={() => update(12)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!mealList[13].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {mealList[13].name}
            
              <button onClick={() => update(13)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!mealList[14].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {mealList[14].name}
            
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
          {!mealList[15].name  ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {mealList[15].name}
            
              <button onClick={() => update(15)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!mealList[16].name ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {mealList[16].name}
            
              <button onClick={() => update(16)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
          {!mealList[17].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {mealList[17].name}
            
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
          {!mealList[18].name ? null : ( <>
          <p className="mealLabel">Breakfast</p>
          <p className="recipeName" id="sunB">
            {mealList[18].name}
            
              <button onClick={() => update(18)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!mealList[19].name  ? null : ( <>
          <p className="mealLabel">Lunch</p>
          <p className="recipeName" id="sunB">
            {mealList[19].name}
            
              <button onClick={() => update(19)}>
                <DeleteIcon />
              </button>
            
          </p></>)}
          {!mealList[20].name ? null : ( <>
          <p className="mealLabel">Dinner</p>
          <p className="recipeName" id="sunB">
            {mealList[20].name}
            
              <button onClick={() => update(20)}>
                <DeleteIcon />
              </button>
           
          </p></> )}
        </div>
      </div>
      </div>
    );
  }
  
  export default MealPlan;
  