import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import apiConf from '../../../api-conf';

class Changent extends Component {

  constructor(props) {
    super()
    
    this.state = {changent: props.changent}
  }

  componentDidMount() {
    // axios.get(apiConf.changent.serverApi)
    //   .then(resp => {
    //     this.setState(resp.data)
    //     console.log(resp.data)
    //   })
    //   .catch(console.info(console.error))
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  render() {
    return (
      <div className="changent">
        <div className="row no-gutters row-content">
          <div className="col-auto">
            <img className="prof-image" src={this.state.changent.profilePicture} alt="Profile image"></img>
          </div>
          <div className="col">
            <div className="card-body">
              <h4 className="card-title">{this.state.changent.alias}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{`${this.state.changent.name} ${this.state.changent.middleName} ${this.state.changent.lastName}`}</h6>
              <br/>
              <p className="card-text">{this.state.changent.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Changent.propTypes = {
  changent: PropTypes.object
}

export default Changent;