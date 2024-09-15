import { useState } from "react";

export const Title = () => {
    return <h1 id="title" key="h1">Food Delivery</h1>;
  };
  
  const Header = () => {
    const [login,setLogin] = useState(true)
    return (
      <div className="nav">
        <Title />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {login ? <button onClick={()=>setLogin(false)}>Login</button> : <button onClick={()=> setLogin(true)}>logout</button>}


      </div>
    );
  };

  export default Header;