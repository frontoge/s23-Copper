import React, { useState, useEffect} from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Cookies from "universal-cookie"
import Button from "@mui/material/Button";


function Grocery(props) {
  const [groceries, setGroceries] = useState(null);
  const [value, setValue] = useState(null);
  const [groceryList, setGroceryList] = useState(null)
  const cookies = new Cookies();
  const userData = cookies.get("login")

  useEffect(() => {
     getMeal()
     console.log(groceryList)
  }, []);

  async function getMeal() {
    await fetch(`http://localhost:4000/api/mealplans/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setGroceries(data);
        getGroceryString(data)
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getGroceryString(data) {
    var grocery = ""
    data.data.forEach((element) => {
      if (element.recpieID) {
        if (!grocery) {
           grocery = element.recpieID;
        } else {
          grocery += "," + element.recpieID;
        }
      }
    });
    getGroceryItem(grocery)
    
  }

  function getGroceryItem(grocerySearch) {
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

   function saveList() {
    fetch(
      `http://localhost:4000/api/grocerylists/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({owner: userData.id, item: '', quantity: 0, groceryList: JSON.stringify(groceryList) })
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        //window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.message)
      })
   }

  function createGroceryList(data) {
    let l = []

    data.forEach((element) => {
      return element.extendedIngredients.forEach((item) => {
        if (!(l.some(it => it.id === item.id))) {
          item.amount = 1
          l.push(item)
        }
      })
    })
    setGroceryList(l)
  }

  return (
    <div className="backgroundImage">
      <h1 className="title">Ingredient List</h1>
      <div className="groceryPage">
      <Button
          style={{
            backgroundColor: "#afcfcf",
            color: "white",
            margin: "0 10px",
          }}
          onClick={() => {
            saveList()
            
          }}
        >
          Save List
        </Button>
          
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
      <div className="groceryList" style={{marginBottom: "15px"}}>
        <input className="inputs" value={value} onChange={(e) => { setValue(e.target.value) }} />
        <button className="addButton" onClick={addToList}>Add</button>
      </div>
    </div>
  );
}

export default Grocery;
