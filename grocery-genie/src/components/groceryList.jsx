import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


let grocerySearch = "";

function Grocery(props) {
  const [groceries, setGroceries] = useState(null);
  const [value, setValue] = useState(null);


  function getGroceryString() {
    props.mealList.forEach((element) => {
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
      })
      .catch(() => {
        console.log("error");
      });
  }

  function addToList() {
    if (!props.groceryList) {
      let temp = { id: value, nameClean: value, amount: 1 };
      props.setGroceryList(temp);
    } else {
      const temp = [...props.groceryList];
      let temp1 = { id: value, nameClean: value, amount: 1 };
      temp.push(temp1);
      props.setGroceryList(temp);
    }
  }

  function deleteItem(id) {
    let tempList = props.groceryList.filter(item => item.id !== id)
    props.setGroceryList(tempList)
  }



  function getGroceries() {

    getGroceryString()
    if (grocerySearch)
      getGroceryItem()
  }

  function addAmount(index) {
    const temp = [...props.groceryList];
    temp[index].amount++;
    props.setGroceryList(temp)

   }

   function subAmount(index) {
    const temp = [...props.groceryList];
    temp[index].amount--;
    props.setGroceryList(temp)
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
    <div className="backgroundImage">
      <h1 className="title">Ingredient List</h1>
      <div className="groceryPage">
          <button className ="groceryButton"
            onClick={() => {
              getGroceries();
            }}
          >
            Get Grocery List{" "}
          </button>
        </div>
      <div>
        {props.groceryList
          ? props.groceryList.map((grocery, index) => (
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