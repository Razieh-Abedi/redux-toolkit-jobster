import React from "react";

function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormRow;
