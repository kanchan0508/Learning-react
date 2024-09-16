import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const lat = '26.95250';        // Replace with the desired latitude
const lng = '75.71050';
const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    getAllRestuarant();
  }, []);

  async function getAllRestuarant() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json.data.da);
      setRestaurant(json.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(restaurant?.data?.cards[0]?.card?.card?.text);

  return (
    <div>
      <h1>Menu</h1>
      <h2>{id}</h2>
      <h1>{restaurant?.data?.cards[0]?.card?.card?.text}</h1>
    </div>
  );
};

export default RestaurantMenu;
