import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    const [showinput, setShowinput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    // Function to filter restaurants based on the search input
    const showSearch = (searchTerm, restaurantList) => {
        return restaurantList.filter((restaurant) => 
            restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Handle search
    const handleSearch = () => {
        setFilteredRestaurants(showSearch(showinput, restaurants));
    };

    // useEffect to fetch restaurant data on component mount
    useEffect(() => {
        getRestaurants();
    }, []);
    // Function to fetch restaurants data
    async function getRestaurants() {
    try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();

        // Log the full structure to the console
        console.log(JSON.stringify(data, null, 2));  // Pretty print JSON

        // Try to find the actual restaurant data in the response
        const restaurantCards = data?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setFilteredRestaurants(restaurantCards);
            setRestaurants(restaurantCards);
    } catch (error) {
        console.error("Error fetching restaurants:", error);
    }
}

    console.log(restaurants);

    return  (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="search" 
                    value={showinput} 
                    onChange={(e) => setShowinput(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((rest) => (
                        <div key={rest.info.id} className="restaurant">
                            {/* Construct the image URL using cloudinaryImageId */}
                            {rest.info.cloudinaryImageId ? (
                                <img 
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${rest.info.cloudinaryImageId}`} 
                                    alt={rest.info.name} 
                                    style={{ width:"220px", height: "150px", objectFit: "cover" }} 
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                            <h2>{rest.info.name || "Unknown Restaurant"}</h2>
                            <p>Rating: {rest.info.avgRatingString || "No rating available"}</p>
                            <p>Cuisines: {rest.info.cuisines?.length ? rest.info.cuisines.join(", ") : "No cuisines available"}</p>
                            <p>Cost for Two: {rest.info.costForTwo || "No cost information available"}</p>
                            <p>Discount: {rest.info.aggregatedDiscountInfoV3?.header || "No discount available"}</p>
                            <a href={rest.cta.link} target="_blank" rel="noopener noreferrer">View on Swiggy</a>
                        </div>
                    ))
                ) : (
                    <Shimmer />
                )}
            </div>
        </>
    )
};

export default Body;
