import React, {useState} from "react";

function Item({ name, category }) {

  const [isCart, setIsCart] = useState(false)

  function handleClick () {
    setIsCart((prevState => !prevState))
  }


  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {handleClick}> {isCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
