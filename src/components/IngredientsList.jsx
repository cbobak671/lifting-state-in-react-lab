import React from "react";
import { availableIngredients } from "../App";
import '../App.css';

const IngredientList = ({ addToBurger }) => {
  return (
    <section>
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
    </section>
  );
};

export default IngredientList;
