import { useState, useEffect } from "react";

const Body = () => {
    const [showinput, setShowinput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    // Function to filter restaurants based on the search input
    const showSearch = (searchTerm, restaurantList) => {
        const filtered = restaurantList.filter((restaurant) => 
            restaurant?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filtered;
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
    async function getRestaurants () {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();

            // Use console.log to inspect the structure of 'data'
            console.log(data);

            // Ensure the data structure exists before accessing deeply nested properties
            const restaurantCards = data?.data?.cards?.find(card => card?.data?.data?.cards)?.data?.data?.cards;

            if (restaurantCards) {
                setFilteredRestaurants(restaurantCards);
                setRestaurants(restaurantCards);
            } else {
                console.error("Restaurant cards not found");
            }
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    }

    return (
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
                        <div key={rest.id} className="restaurant">
                            <img 
                                src={rest.image} 
                                alt={rest.name} 
                                style={{ width: "200px", height: "150px" }} 
                            />
                            <h2>{rest.name}</h2>
                            <p>Rating: {rest.rating}</p>
                            <p>Cuisines: {rest.cuisines?.join(", ")}</p>
                        </div>
                    ))
                ) : (
                    <p>No restaurants found</p>
                )}
            </div>
        </>
    );
};

export default Body;
