import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => {
    return <h1 id="title" key="h1">Food Delivery</h1>;
  };
  
  const Header = () => {
    const [login,setLogin] = useState(true)
    return (
      <div className="nav">
        <Title />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
        {login ? <button onClick={()=>setLogin(false)}>Login</button> : <button onClick={()=> setLogin(true)}>logout</button>}


      </div>
    );
  };

  export default Header;