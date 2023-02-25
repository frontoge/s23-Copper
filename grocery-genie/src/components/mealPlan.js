import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';



function MealPlan() {
    let [sunB, setsunB] = useState("Oatmeal");
    let [sunL, setsunL] = useState("");
    let [sunD, setsunD] = useState("Spaghetti");
    let [monB, setmonB] = useState("Omelet");
    let [monL, setmonL] = useState("");
    let [monD, setmonD] = useState("Burritos");
    let [tueB, settueB] = useState("Granola");
    let [tueL, settueL] = useState("Tuna Salad");
    let [tueD, settueD] = useState("Chimichangas");
    let [wedB, setwedB] = useState("Toast");
    let [wedL, setwedL] = useState("");
    let [wedD, setwedD] = useState("Pot Roast");
    let [thB, setthB] = useState("Crepes");
    let [thL, setthL] = useState("Fried Rice");
    let [thD, setthD] = useState("Chicken Divine");
    let [friB, setfriB] = useState("Pancakes");
    let [friL, setfriL] = useState("Chicken Salad");
    let [friD, setfriD] = useState("");
    let [satB, setsatB] = useState("Waffles");
    let [satL, setsatL] = useState("");
    let [satD, setsatD] = useState("Chicken Divine");

    return (
        <div className="mealPlanPage">
            <h1 className="title">Meal Plan</h1>
            <div className="dayOfTheWeek">
                <p className="dayLabel">
                    Sunday
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>

                <div className="dayMeals">
                    {!sunB ? null : (
                        <>
                            <p className="mealLabel">Breakfast</p>
                            <p className="recipeName">
                                {sunB}

                                <button onClick={() => setsunB("")}>
                                    <DeleteIcon />
                                </button>
                            </p>{" "}
                        </>
                    )}
                    {!sunL ? null : (
                        <>
                            <p className="mealLabel">Lunch</p>
                            <p className="recipeName">
                                {sunL}

                                <button onClick={() => setsunL("")}>
                                    <DeleteIcon />
                                </button>

                            </p>
                        </>
                    )}
                    {!sunD ? null : (
                        <>
                            <p className="mealLabel">Dinner</p>
                            <p className="recipeName">
                                {sunD}

                                <button onClick={() => setsunD("")}>
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
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
                <div className="dayMeals">
                    {!monB ? null : (
                        <>
                            <p className="mealLabel">Breakfast</p>
                            <p className="recipeName">
                                {monB}

                                <button onClick={() => setmonB("")}>
                                    <DeleteIcon />
                                </button>

                            </p>
                        </>
                    )}
                    {!monL ? null : (
                        <>
                            <p className="mealLabel">Lunch</p>
                            <p className="recipeName" id="sunB">
                                {monL}

                                <button onClick={() => setmonL("")}>
                                    <DeleteIcon />
                                </button>

                            </p>
                        </>
                    )}
                    {!monD ? null : (
                        <>
                            <p className="mealLabel">Dinner</p>
                            <p className="recipeName" id="sunB">
                                {monD}

                                <button onClick={() => setmonD("")}>
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
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
            </div>
            <div className="dayMeals">
                {!tueB ? null : (
                    <>
                        <p className="mealLabel">Breakfast</p>
                        <p className="recipeName" id="sunB">
                            {tueB}

                            <button onClick={() => settueB("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!tueL ? null : (
                    <>
                        <p className="mealLabel">Lunch</p>
                        <p className="recipeName" id="sunB">
                            {tueL}

                            <button onClick={() => settueL("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!tueD ? null : (
                    <>
                        <p className="mealLabel">Dinner</p>
                        <p className="recipeName" id="sunB">
                            {tueD}

                            <button onClick={() => settueD("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
            </div>


            <div className="dayOfTheWeek">
                <p className="dayLabel">
                    Wednesday
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
            </div>
            <div className="dayMeals">
                {!wedB ? null : (
                    <>
                        <p className="mealLabel">Breakfast</p>
                        <p className="recipeName" id="sunB">
                            {wedB}

                            <button onClick={() => setwedB("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!wedL ? null : (
                    <>
                        <p className="mealLabel">Lunch</p>
                        <p className="recipeName" id="sunB">
                            {wedL}

                            <button onClick={() => setwedL("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!wedD ? null : (
                    <>
                        <p className="mealLabel">Dinner</p>
                        <p className="recipeName" id="sunB">
                            {wedD}

                            <button onClick={() => setwedD("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
            </div>


            <div className="dayOfTheWeek">
                <p className="dayLabel">
                    Thursday
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
            </div>
            <div className="dayMeals">
                {!thB ? null : (
                    <>
                        <p className="mealLabel">Breakfast</p>
                        <p className="recipeName" id="sunB">
                            {thB}

                            <button onClick={() => setthB("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!thL ? null : (
                    <>
                        <p className="mealLabel">Lunch</p>
                        <p className="recipeName" id="sunB">
                            {thL}

                            <button onClick={() => setthL("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!thD ? null : (
                    <>
                        <p className="mealLabel">Dinner</p>
                        <p className="recipeName" id="sunB">
                            {thD}

                            <button onClick={() => setthD("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
            </div>


            <div className="dayOfTheWeek">
                <p className="dayLabel">
                    Friday
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
            </div>
            <div className="dayMeals">
                {!friB ? null : (
                    <>
                        <p className="mealLabel">Breakfast</p>
                        <p className="recipeName" id="sunB">
                            {friB}

                            <button onClick={() => setfriB("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!friL ? null : (
                    <>
                        <p className="mealLabel">Lunch</p>
                        <p className="recipeName" id="sunB">
                            {friL}

                            <button onClick={() => setfriL("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!friD ? null : (
                    <>
                        <p className="mealLabel">Dinner</p>
                        <p className="recipeName" id="sunB">
                            {friD}

                            <button onClick={() => setfriD("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
            </div>


            <div className="dayOfTheWeek">
                <p className="dayLabel">
                    Saturday
                    <a href="">
                        <AddBoxIcon sx={{ color: "black" }} />
                    </a>
                </p>
            </div>
            <div className="dayMeals">
                {!satB ? null : (
                    <>
                        <p className="mealLabel">Breakfast</p>
                        <p className="recipeName" id="sunB">
                            {satB}

                            <button onClick={() => setsatB("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!satL ? null : (
                    <>
                        <p className="mealLabel">Lunch</p>
                        <p className="recipeName" id="sunB">
                            {satL}

                            <button onClick={() => setsatL("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
                {!satD ? null : (
                    <>
                        <p className="mealLabel">Dinner</p>
                        <p className="recipeName" id="sunB">
                            {satD}

                            <button onClick={() => setsatD("")}>
                                <DeleteIcon />
                            </button>

                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default MealPlan;
