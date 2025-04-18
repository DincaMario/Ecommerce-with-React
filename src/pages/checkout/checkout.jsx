import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import "./checkout.styles.scss";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
function CheckoutPage( {cartItems, cartTotal}) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItems => 
           <CheckoutItem key = {cartItems.id} cartItem={cartItems}/>
            )
      }
      <div className="total">
            <span>TOATAL: ${cartTotal}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
