import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChangentsCardCarousel extends Component {
  
  constructor(props) {
    super()
    
    this.state = {changent: props.changent, active: props.active}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  render() {
    return (
      <div className={`carousel-item  col-md-3 ${this.state.active}`}>
        <div className="carousel-changent-card card">
          <input id="theId" name="_id" type="hidden" value={this.state.changent._id}></input>
          <img className="prof-image mx-auto" src={this.state.changent.profilePicture} alt="Profile image"></img>
    
          <div className="card-body">
            <h5 className="card-title text-primary">{this.state.changent.alias}</h5>
            <p className="card-text text-dark">{`${this.state.changent.name} ${this.state.changent.middleName} ${this.state.changent.lastName}`}.</p>
            <p className="card-text text-light"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    )
  }
}

ChangentsCardCarousel.propTypes = {
  changent: PropTypes.object,
  active: PropTypes.string
}

export default ChangentsCardCarousel;