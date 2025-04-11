import React from "react";

import "./customButton.styles.scss";

function CustomButton(props) {
  return (
    <button
      className={`${props.inverted ? "inverted" : ""} ${
        props.isGoogleSignIn ? "google-sign-in" : ""
      } custom-button `}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default CustomButton;
