import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 id="title" key="h1">Food Delivery</h1>;
};

const Header = () => {
  return (
    <div className="nav">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

         const restaurants = [
          {
            "id": 1,
            "name": "The Spice Lounge",
            "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307",
            "rating": 4.5,
            "cuisines": ["Indian", "Thai", "Chinese"]
          },
          {
            "id": 2,
            "name": "Bella Italia",
            "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            "rating": 4.3,
            "cuisines": ["Italian", "Mediterranean"]
          },
          {
            "id": 3,
            "name": "Sushi World",
            "image": "https://images.unsplash.com/photo-1593032465174-2b6ba0065247",
            "rating": 4.7,
            "cuisines": ["Japanese", "Sushi", "Asian Fusion"]
          },
          {
            "id": 4,
            "name": "Burger King",
            "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
            "rating": 4.1,
            "cuisines": ["American", "Fast Food", "Burgers"]
          },
          {
            "id": 5,
            "name": "Le Petit Bistro",
            "image": "https://images.unsplash.com/photo-1580680803044-4f30b0cde3ce",
            "rating": 4.8,
            "cuisines": ["French", "European"]
          },
          {
            "id": 6,
            "name": "Green Garden",
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            "rating": 4.6,
            "cuisines": ["Vegan", "Healthy", "Salads"]
          }
        ]

        console.log(restaurants)
      
        const Body = () => {
            return (
              <div className="restaurant-list">
                {restaurants.map((rest) => (
                  <div key={rest.id} className="restaurant">
                    <img src={rest.image} alt={rest.name} style={{ width: "200px", height: "150px" }} />
                    <h2>{rest.name}</h2>
                    <p>Rating: {rest.rating}</p>
                    <p>Cuisines: {rest.cuisines.join(", ")}</p>
                  </div>
                ))}
              </div>
            );
          };
      
          const Footer =() =>{
            return (
                <div>
                    Footer items
                </div>
            )
          }

   const AppLayout = () =>{
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
   }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
