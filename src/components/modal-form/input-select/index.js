import React from 'react';

const InputSelect = ({
  value,
  typeOfValue,
  typeOfInput = null,
  options,
  onChange,
  accessToAnObject,
  required = false,
}) => (
    <div className="form-group" data-id="input-select">
      <label htmlFor={typeOfValue}>{typeOfValue}</label>
      <select
        className="form-control"
        required={required}
        id={typeOfValue}
        value={value || ''}
        onChange={(e) => onChange(accessToAnObject(e.target.value || null))}
      >
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>
  );

export default InputSelect;
