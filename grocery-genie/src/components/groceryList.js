import React, { useState } from "react";

function Grocery() {
    const [groceries, setGroceries] = useState(null);
function getGroceryItem() {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=ce57a3f8165c4485a55fb8654a2ba593&&ids=715538,716429,715497,644387`
    )
      .then((response) => response.json())
      .then((data) => {
        setGroceries(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  return (
    <div>
      <h1 className="title">Ingredient List</h1>
      <button onClick={getGroceryItem}>Get Grocery List</button>
      <div>
        {groceries
          ? groceries.map((grocery) => {
              return grocery.extendedIngredients.map((item) => (
                <li key={item.id}>{item.name},{item.amount},{item.unit}</li>
              ));
            })
          : null}
      </div>
      
    </div>
  );
}

export default Grocery;