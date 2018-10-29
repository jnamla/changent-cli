import MenuH from './MenuH'
import Changent from '../../user/Changent'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
    return (
      <div>
        <MenuH title="Initium">
        </MenuH>
        <Changent/>
      </div>
      
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;