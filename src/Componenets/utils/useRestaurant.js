import { useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

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

  return restaurant;
};

export default useRestaurant