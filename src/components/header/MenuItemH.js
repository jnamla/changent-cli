import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MenuItemH extends Component {
  
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">{this.props.title}</a>
      </li>
    )
  }
  
}

MenuItemH.propTypes = {
  img: PropTypes.string,
  class: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default MenuItemH;