import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "./utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlice";
 

const RestaurantMenu = () => {
 
  const param = useParams();
  const { id } = param;

  
  const dispatch = useDispatch()
  
  const handleAddItem = ()=>{
    dispatch(addItem(id))
  }
  const handleRemoveItem = () =>{
    dispatch(removeItem())
  }

  return (
    <div data-testid="menu">
      <h1>Menu</h1>
      <h2>{id}</h2>
      <button data-testid= "addBtn" onClick={()=> handleAddItem()} > Add to cart </button>
      <button onClick={()=> handleRemoveItem()} > Remove from cart </button>
    </div>
  );
};

export default RestaurantMenu;
