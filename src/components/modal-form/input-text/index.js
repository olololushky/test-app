import React from 'react';

const InputText = ({
  value,
  typeOfValue,
  typeOfInput = null,
  onChange,
  accessToAnObject,
  required = false,
}) => (
    <div className="form-group">
      <label htmlFor={typeOfValue}>{typeOfValue}</label>
      <input
        type={typeOfInput}
        className="form-control"
        required={required}
        id={typeOfValue}
        value={value}
        placeholder={`Edit ${typeOfValue}`}
        onChange={(e) => onChange(accessToAnObject(e.target.value))}
      />
    </div>
  );

export default InputText;