import React, { useState } from "react";

function Grocery() {
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
}
export default Grocery;