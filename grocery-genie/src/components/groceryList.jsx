import React, { useState, useEffect } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


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


export default Grocery;