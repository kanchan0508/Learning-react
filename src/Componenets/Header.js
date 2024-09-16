import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

export const Title = () => {
    return <Link to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&s" alt="" style={{
      width: "100px",
      height: "70px"
    }} />
    </Link>
  };
  
  const Header = () => {
    const [login,setLogin] = useState(true)

     const isOnline = useOnline()
     
    return (
      <div className="nav">
        <Title />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
        {isOnline ? "✅" : "❌"}
        {login ? <button onClick={()=>setLogin(false)}>Login</button> : <button onClick={()=> setLogin(true)}>logout</button>}


      </div>
    );
  };

  export default Header;