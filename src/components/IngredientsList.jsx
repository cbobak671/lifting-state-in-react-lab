import React from "react";
import { availableIngredients } from "../App";

const IngredientList = ({ addToBurger }) => {
    return <ul>{availableIngredients.map((ingredient, index) => (
        <li key={index}>
{ingredient.name}
<button onClick={addToBurger}>+</button>
        </li>
    ))}
        </ul>;
  };
  
  export default IngredientList;
  