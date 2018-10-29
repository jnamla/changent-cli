import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ChangentCardCarousel from './ChangentCardCarousel'

class ChangentsCarousel extends Component {
  
  constructor(props) {
    super()

    this.state = {
      changents: props.changents
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  getActiveClassString(changents) {
    const items = []

    changents.forEach((changent, index) => {
      items.push(<ChangentCardCarousel key={changent._id} changent={changent} active={index==0?'active':''}/>)
    });

    return items
  }

  render() {
    return (
      <div id="changent-carousel-main" className="changent-carousel carousel slide" data-ride="carousel">
        <div className="carousel-inner mx-auto">
          {
            this.getActiveClassString(this.state.changents)
          }
        </div>
        <a className="carousel-control-prev" href="#changent-carousel-main" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#changent-carousel-main" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}


ChangentsCarousel.propTypes = {
  changents: PropTypes.array
}

export default ChangentsCarousel