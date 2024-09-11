import { useState } from "react";
import { restaurants } from "../../config";

const Body = () => {
    const [showinput, setShowinput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    const showSearch = (searchTerm, restaurantList) => {
        const filtered = restaurantList.filter((restaurant) => 
            restaurant?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filtered;
    };

    const handleSearch = () => {
        setFilteredRestaurants(showSearch(showinput, restaurants));
    };

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
                {filteredRestaurants.map((rest) => (
                    <div key={rest.id} className="restaurant">
                        <img 
                            src={rest.image} 
                            alt={rest.name} 
                            style={{ width: "200px", height: "150px" }} 
                        />
                        <h2>{rest.name}</h2>
                        <p>Rating: {rest.rating}</p>
                        <p>Cuisines: {rest.cuisines.join(", ")}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Body;
