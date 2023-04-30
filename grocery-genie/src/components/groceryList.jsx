import React, { useState, useEffect } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "../styles/groceryStyles.css"


let grocerySearch = "";

function Grocery(props) {
  const [groceries, setGroceries] = useState(null);
  const [value, setValue] = useState(null);
  const [groceryList, setGroceryList] = useState(null)

  useEffect(() => {
    getGroceryString()
    getGroceryItem()
  }, []);

  function getGroceryString() {
    var meal = JSON.parse(localStorage.getItem('meal'))
    meal.forEach((element) => {
      if (element.id) {
        if (!grocerySearch) {
          grocerySearch = element.id;
        } else {
          grocerySearch += "," + element.id;
        }
      }
    });
  }


  function getGroceryItem() {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&ids=${grocerySearch}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGroceries(data);
        createGroceryList(data);
        console.log("groceries", groceries)
      })
      .catch(() => {
        console.log("error");
      });
  }

  function addToList() {
    if (!groceryList) {
      let temp = { id: value, nameClean: value, amount: 1 };
      setGroceryList(temp);
    } else {
      const temp = [...groceryList];
      let temp1 = { id: value, nameClean: value, amount: 1 };
      temp.push(temp1);
      setGroceryList(temp);
    }
  }

  function deleteItem(id) {
    let tempList = groceryList.filter(item => item.id !== id)
    setGroceryList(tempList)
  }

  function addAmount(index) {
    const temp = [...groceryList];
    temp[index].amount++;
    setGroceryList(temp)

   }

   function subAmount(index) {
    const temp = [...groceryList];
    temp[index].amount--;
    setGroceryList(temp)
   }



  function createGroceryList(data) {
    let l = []

    data.forEach((element) => {
      return element.extendedIngredients.forEach((item) => {
        item.amount = 1;
        l.push(item)
      })
    })
    setGroceryList(l)
  }

  return (
    <div className="backgroundImage">
      <h1 className="title">Ingredient List</h1>
      <div className="groceryPage">
        </div>
      <div>
        {groceryList
          ? groceryList.map((grocery, index) => (
            <div className="groceryList">
              <li key={grocery.id}>
                  {grocery.amount} {grocery.nameClean}
                </li>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <button className="deleteButton"
                  onClick={() => {
                    deleteItem(grocery.id);
                  }}
                >
                  Delete
                </button>
                <div className = "addDeleteDisplay">
                  <button className="PlusMinusButtons" onClick={() => addAmount(index)}>
                      <AddIcon style={{color: "#609f9f", fontSize: '1.25em', margin: '0'}}/>
                  </button>
                  <button className="PlusMinusButtons" onClick={() => subAmount(index)}>
                      <RemoveIcon style={{color: "#609f9f", fontSize: '1.25em', margin: '0'}}/>
                  </button>
                </div>
                </div>
              </div>

            ))  : null}
      </div>
      <div className="groceryList">
        <input className="inputs" value={value} onChange={(e) => { setValue(e.target.value) }} />
        <button className="addButton" onClick={addToList}>Add</button>
      </div>
    </div>
  );
}

export default Grocery;