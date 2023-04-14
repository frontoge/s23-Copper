import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Grocery() {
  const [groceries, setGroceries] = useState(null);
  const [groceryList, setGroceryList] = useState(null);
  const [value, setValue] = useState(null);


  function getGroceryItem() {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&ids=715538,716429,715497,644387`
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
    let temp = { id: value, nameClean: value, amount: 1 };
    if (!groceryList) {
      setGroceryList(temp);
    }
    else {
      const temp1 = [...groceryList];
      temp1.push(temp);
      setGroceryList(temp1);
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
        l.push(item)
      })
    })
    setGroceryList(l)
    console.log("createGroceryList", groceryList)
  }

  return (
    <div>
      <h1 className="title">Ingredient List</h1>
      <button onClick={getGroceryItem}>Get Grocery List</button>
      <div>
        {groceryList
          ? groceryList.map((grocery, index) => (
            <div className="groceryList">
              <li key={grocery.id}>
                {grocery.amount} {grocery.nameClean}
              </li>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="deleteButton" onClick={() => { deleteItem(grocery.id) }}> Delete</button>

                <div className="addDeleteDisplay">
                  <button className="PlusMinusButtons" onClick={() => addAmount(index)}>
                    <AddIcon />
                  </button>
                  <button className="PlusMinusButtons" onClick={() => subAmount(index)}>
                    <RemoveIcon />
                  </button>
                </div>
              </div>
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