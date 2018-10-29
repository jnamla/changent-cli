import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ChangentCard from './ChangentCard'

class ChangentsList extends Component {
  
  constructor(props) {
    super()

    this.state = {changents: props.changents}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  render() {
    return (
      <div className="changent-list card-group container">
        <div className="row float-right">
          {
            this.state.changents.map(changent => 
              <ChangentCard key={changent._id} changent={changent}/>
            )
          }
        </div>
      </div>
    );
  }
} 

ChangentsList.propTypes = {
  changents: PropTypes.array.isRequired
}

export default ChangentsList;