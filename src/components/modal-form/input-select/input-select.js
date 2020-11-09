import React from 'react';

const InputText = ({
  value,
  typeOfValue,
  typeOfInput = null,
  options,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={typeOfValue}>{typeOfValue}</label>
      <select
        className="form-control"
        id={typeOfValue}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default InputText;
