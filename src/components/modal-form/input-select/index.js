import React from 'react'

const InputSelect = ({
  value,
  typeOfValue,
  options,
  onChange,
  required = false,
  name,
}) => (
  <div className="form-group" data-id="input-select">
    <label htmlFor={typeOfValue}>{typeOfValue}</label>
    <select
      className="form-control"
      required={required}
      id={typeOfValue}
      value={value || ''}
      onChange={(ev) => onChange(ev, name)}
    >
      {options.map((option, i) => (
        <option key={i}>{option}</option>
      ))}
    </select>
  </div>
)

export default InputSelect
