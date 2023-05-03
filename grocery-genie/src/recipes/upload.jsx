import React, {useState} from "react";
import image from "../images/garlicButterWing.jpg";
let subString = "";
let loc = ""



function Upload(props) {
  
  const [subList, setSubList] = useState(false)
  const [ingredients, setIngredients] = useState([
  { id: "1", name: "3 pounds chicken drumettes or wings" },
  { id: "2", name: "½ tablespoon seasoned salt" },
  { id: "3", name: "1 cup water" },
  { id: "4", name: "1 cup hot sauce" },
  { id: "5", name: "1 tablespoon honey" },
  { id: "6", name: "1 teaspoon garlic powder" },
  { id: "7", name: "2 tablespoons butter melted" },
]);

  function getSubString(value, location) {
    subString = value;
    loc = location
    getSub();
  }



  function updateRecipe(name) {
    let temp = [...ingredients];
    temp[loc]= {id: "" , name: name}
    setIngredients(temp)
    setSubList(null);
  }

  function getSub() {
    fetch(
      `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=28ae15fcd30248a7bdf22580850a23be&&ingredientName=${subString}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") setSubList(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  return (
    <div className="backgroundImage"><br></br><br></br>
      <div className="top">

        <h1 className="uploadTitle">Instant Pot Buffalo Garlic Butter Wings</h1>
        <div className="image-container">
          <img
            className="uploadImg"
            src={image}
            alt="Recipe Image"
          ></img>
        </div>
      </div><br></br><br></br>
      <div className="RecipeInstruction">
        <div>
        <h3>Ingredients</h3>
        <ul ><br></br><br></br>
          <li>{ingredients[0].name}</li>
          <li>{ingredients[1].name}</li>
          <li>{ingredients[2].name}</li>
          <li> {ingredients[3].name}</li>
          <li
            onClick={() => {
              getSubString("honey", 4);
            }}
          >
            {ingredients[4].name}
          </li>
          <li>{ingredients[5].name}</li>
          <li
            onClick={() => {
              getSubString("butter", 6);
            }}
          >
            {ingredients[6].name}
          </li>
        </ul>
        </div>
        <div>
        <h3>Instructions</h3>
          <p >
            If needed, separate the drumettes and flats from each other, removing
            and discarding the tips if desired. <br></br>
            Place the chicken wings in a large mixing bowl, add the seasoned salt,
            and toss to coat. <br></br>
            For a 3 or 6-quart model, pour 1 cup of cold tap water into the inner
            pot. <br></br>
            For an 8-quart model, use 1.5 cups of cold tap water. Place a rack or
            steamer basket inside the instant pot. <br></br>
            Place the seasoned wings on the rack or in the steamer basket inside
            the inner pot. It is okay if you layer the wings on top of eachother.
            <br></br>
            Seal lid of the pressure cooker, being sure vent knob is closed.{" "}
            <br></br>
            For Fresh Wings: Cook on high pressure for 10 minutes. <br></br>
            For Frozen Wings: Cook on high pressure for 15 minutes. <br></br>
            Once the cooking time has elapsed, let the pressure release naturally
            for at least 5 minutes, 10 minutes is best.<br></br>
            Remove the pressure-cooked chicken wings from the pressure cooker and
            place them into a clean bowl.<br></br>
            In a separate small bowl, prepare the buffalo sauce by mixing together
            the hot sauce, honey, butter, and garlic powder until combined.
            <br></br>
            Pour half the buffalo sauce (or YOUR favorite sauce) over the chicken
            wings and gently toss to coat in the sauce.<br></br>
            Place the chicken wings on a baking sheet or broiler pan that has been
            lined with foil. <br></br>
            Broil the chicken wings under high heat for 2-3 minutes per side,
            until the skin is golden and crispy. <br></br>
            Brush the broiled wings with additional buffalo sauce and serve
            immediately.
          </p>
        </div>
      </div>
      <div>
        <div className="subs">
          {subList ? (
            <>
              <h2 className="title">Substitutions</h2>
              <h2 className="title">{subList.ingredient}</h2>
              <hr></hr>
            </>
          ) : null}
          {subList
            ? subList.substitutes.map((subs, index) => (
                <>
                  <p className="title" onClick={() => {
                    updateRecipe( subs)
                  }} key={index}>
                    {subs} {index}
                  </p>

                  <br></br>
                </>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Upload;