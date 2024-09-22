import React from "react";
import { useSelector } from "react-redux";

function Cart() {

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div>
      <h1>Cart items{cartItems.length}</h1>
    </div>
  );
}

export default Cart;
