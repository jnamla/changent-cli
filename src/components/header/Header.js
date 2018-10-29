import MenuH from './MenuH'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
    return (
      <MenuH title="Initium"/>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;