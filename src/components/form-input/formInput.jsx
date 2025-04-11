import React from "react";

import "./formInput.styles.scss";

function FormInput(props) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={props.handleChange}
        {...props}
      ></input>
      {props.label ? (
        <label
          className={`${
            props.value.length ? "shrink" : ''
          } form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;