import React from 'react'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import { filterByMale, filterByAge, filterByFemale } from '../../redux/actions'
import { connect } from 'react-redux'
import './style.css'

const DropdownFilter = ({filterByMale, filterByFemale, filterByAge}) => {
  const dropDownList = [
    {
      key: '1',
      title: 'Male',
      onClick: filterByMale,
    },
    {
      key: '2',
      title: 'Female',
      onClick: filterByFemale,
    },
    {
      key: '3',
      title: 'Older Than 30',
      onClick: filterByAge,
    },
  ] //варианты фильтрации
  return (
    <DropdownButton
    as={ButtonGroup}
    title="Filter"
    id="bg-nested-dropdown"
    className="button"
  >
    {dropDownList.map((item, i) => (
      <Dropdown.Item onClick={item.onClick} key={i} eventKey={item.key}>
        {item.title}
      </Dropdown.Item>
    ))}
  </DropdownButton>
  )
}

export default connect(null, {
  filterByMale,
  filterByAge,
  filterByFemale
})(DropdownFilter)