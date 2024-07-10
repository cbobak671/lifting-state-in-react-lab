import React from "react";
import '../App.css';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index}>
          {ingredient.name}
          <button onClick={removeFromBurger}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
