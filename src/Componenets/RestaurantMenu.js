import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantMenu = () =>{
    const [restaurant , setRestaurant] = useState({})
    const param = useParams()
    const {id} = param

    useEffect(()=>{
        getAllRestuarant()
    },[])

    async function getAllRestuarant() {
        try{
            const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=669200&catalog_qa=undefined&submitAction=ENTER") 
       const json = await data.json();
       console.log(json.data)
       setRestaurant(json.data)
        } catch(error){
            console.log(error)
        }
       
    }
    console.log(restaurant?.data?.cards[0]?.card?.card?.text)

    return (
        <div>
            <h1>Menu</h1>
            <h2>{id}</h2>
            <h1>{restaurant?.data?.cards[0]?.card?.card?.text}</h1>

        </div>
    )
}

export default RestaurantMenu