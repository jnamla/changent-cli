import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Text from '../utils/Text'

class ChangentForm extends Component {
  constructor(props) {
    super()
    
    this.state = {changent: props.changent}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  render() {
    return (
      <form className="changent-form">
        <Text id="email" type="email" help="We&apos;ll never share your email with anyone else."/>
        <Text id="password" type="password"/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

ChangentForm.propTypes = {
  changent: PropTypes.object
}

export default ChangentForm