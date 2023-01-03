import React from "react";

function FormRow({type, name, value,handleChange, labelText}) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {name}
      </label>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormRow;
