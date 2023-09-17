import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ itemsCarrito }) => {
  return (
    <>
      <div>
        {" "}
        <Link to={`/cart`} />
        🛒 {itemsCarrito}
      </div>
    </>
  );
};

export default CartWidget;
