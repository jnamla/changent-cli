import MenuItemH from './MenuItemH'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MenuH extends Component {
  
  render() {
    return (
      <nav className="MenuH navbar navbar-expand-lg navbar-light" title="Initium">
        <a className="navbar-brand" href="#">
          <img src="img/initium.png" width="110" height="40" alt="Initium colorful logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <MenuItemH title="Profile"/>
            <MenuItemH title="Projects"/>
          </ul>
          <span className="navbar-text">
            Change a step a the time
          </span>
        </div>
      </nav>
    )
  }
  
}

MenuH.propTypes = {
  title: PropTypes.string.isRequired
}

export default MenuH;