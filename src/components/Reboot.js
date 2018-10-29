import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './header/Header'
import ChangentsList from './user/ChangentsList'
import ChangentsCarousel from './user/ChangentsCarousel'
import ChangentForm from './user/ChangentForm'

class Reboot extends Component { 

  constructor(props) {
    super()
    
    this.state = {changents: props.changents}
  }

  componentDidMount() {
  }

  render() {
    return ( 
      <div className="reboot">
        <Header title="Bienvenido a reboot"/>
        <ChangentForm/>
        <ChangentsCarousel changents={this.state.changents.changents}/>
        <ChangentsList changents={this.state.changents.changents}/>
      </div>
    )
  }
}

Reboot.propTypes = {
  changents: PropTypes.object
}

export default Reboot;