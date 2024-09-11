export const Title = () => {
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

  export default Header;