import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangentCard extends Component {
  
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
      <div className="changent-card card" onClick={this.handleClick}>
        <input id="theId" name="_id" type="hidden" value={this.state.changent._id}></input>
        <img className="prof-image mx-auto" src={this.state.changent.profilePicture} alt="Profile image"></img>
  
        <div className="card-body">
          <h5 className="card-title text-primary">{this.state.changent.alias}</h5>
          <p className="card-text">{`${this.state.changent.name} ${this.state.changent.middleName} ${this.state.changent.lastName}`}.</p>
          <p className="card-text .text-secondary"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
  }

  handleClick () {
    console.log('tarjeta seleccionada')
  }
}

ChangentCard.propTypes = {
  changent: PropTypes.object
}

export default ChangentCard;