import React from "react";

function FormRowSelect({ name, value, list, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <select
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
