import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/customButton";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";
function CollectionItem(props) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">{props.item.price}</span>
      </div>
      <CustomButton onClick={() => props.addItem(props.item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
