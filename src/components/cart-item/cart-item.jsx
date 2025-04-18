import React from "react";

import "./cart-item.styles.scss";

function CartItem(props) {
  return (
    <div className="cart-item">
      <img src={props.item.imageUrl} alt="item"></img>
      <div className="item-details">
        <span className="name">{props.item.name}</span>
        <span className="price">
          {" "}
          {props.item.quantity} x ${props.item.price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
