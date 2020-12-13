import React from 'react'

const InputText = ({
  value,
  typeOfValue,
  typeOfInput = null,
  onChange,
  required = false,
  name,
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
      onChange={(ev) => onChange(ev, name)}
    />
  </div>
)

export default InputText
