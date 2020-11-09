import React from 'react';
import produce from 'immer';

const InputText = ({ value, typeOfValue, typeOfInput = null, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={typeOfValue}>{typeOfValue}</label>
      <input
        type={typeOfInput}
        className="form-control"
        id={typeOfValue}
        value={value}
        placeholder={`Edit ${typeOfValue}`}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputText;
