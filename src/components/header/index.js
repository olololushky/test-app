import React from 'react'
import { Link } from 'react-router-dom'
import { resetFilter } from '../../redux/actions'
import { connect } from 'react-redux'

const Header = ({ resetFilter }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand mb-0 h1" onClick={resetFilter}>
          Test React App
        </Link>
      </nav>
    </div>
  )
}

export default connect(null, { resetFilter })(Header)
