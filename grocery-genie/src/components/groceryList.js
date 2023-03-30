import React, { useState } from "react";

function Grocery(props) {
  const [groceries, setGroceries] = useState(null);
  const [value, setValue] = useState(null);


  function getGroceryItem() {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&ids=${props.grSearch}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGroceries(data);
        createGroceryList(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function addToList() {
    let temp = { id: value, name: value };
    if (!props.groceryList) {
      props.setGroceryList(temp);
    }
    else {
      const temp = [...props.groceryList];
      let temp1 = { id: value, name: value}
      temp.push(temp1);
      props.setGroceryList(temp);
    }
  }

  function deleteItem(id) {
    let tempList = props.groceryList.filter(item => item.id !== id)
    props.setGroceryList(tempList)
  }

    function getGroceryString() {
    let temp = ""
    props.mealList.forEach((element) => {
      if(element.id){
        if(!temp) {
          temp = element.id
        }
        else {
          temp += "," + element.id 
        }
      }
    })
    props.setGrSearch(temp)
  }

  function getGroceries() {
    getGroceryString()
    getGroceryItem()
  }

  function createGroceryList(data) {
    let l = []

    data.forEach((element) => {
      return element.extendedIngredients.forEach((item) => {
        l.push(item)
      })
    })
    props.setGroceryList(l)
  }

  return (
    <div>
      <h1 className="title">Ingredient List</h1>
      <button onClick={getGroceries}>Get Grocery List</button>
      <div>
        {props.groceryList
          ? props.groceryList.map((grocery) => (
              <div className="groceryList">
                <li key={grocery.id}>{grocery.name}</li><button onClick={() => { deleteItem(grocery.id) }}> Delete</button>
              </div>
            ))
            
           : null}
      </div>
      <div className="groceryList">
        <input value={value} onChange={(e) => { setValue(e.target.value) }} />
        <button onClick={addToList}>Add</button>
      </div>
    </div>
  );
}

export default Grocery;