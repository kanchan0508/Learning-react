import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "./utils/useRestaurant";
 

const RestaurantMenu = () => {
 
  const param = useParams();
  const { id } = param;

  const restaurant = useRestaurant(id)


  return (
    <div>
      <h1>Menu</h1>
      <h2>{id}</h2>
      <h1>{restaurant?.data?.cards[0]?.card?.card?.text}</h1>
    </div>
  );
};

export default RestaurantMenu;
