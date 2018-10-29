import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Text extends Component {
  constructor(props) {
    super()
     
    this.state = {
      value: props.value,
      type: props.type.toLowerCase(),
      containerAddClass: 'form-group ' + this.getAdditionalClassValue(props.contClasses),
      label: this.getUpperCaseText(props.label, props.type),
      id: props.id,
      inputAddClass: 'form-control' + this.getAdditionalClassValue(props.inputClasses),
      placeholder: this.getUpperCaseText(props.placeholder, props.type),
      help: props.help ? props.help : false,
      helpAddClass: 'form-text text-muted' + props.helpClasses ? props.helpClasses : ''
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //clean timers, listeners
  }

  render() {
    let state = this.state

    return (
      <div className={state.containerAddClass}>
        <label htmlFor={state.id}>{state.label}</label>
        {
          this.getInputComponent(state)
        }
      </div>
    );
  }

  getAdditionalClassValue(additionalClass) {
    return (additionalClass) ? additionalClass : ''
  }

  getUpperCaseText(text, type) {
    return (text) ? text : type.charAt(0).toUpperCase() + type.slice(1)
  }

  getInputComponent(state) {
    if (state.help) {
      return (
        <React.Fragment>
          <input type={state.type} className={state.inputAddClass} id={state.id} aria-describedby={`${state.id}Help`} placeholder={state.placeholder}/>
          <small id={`${state.id}Help`} className={state.helpAddClass}>{state.help}</small>
        </React.Fragment>
      )
    } else {
      return <input type={state.type} className={state.inputAddClass} id={state.id} placeholder={state.placeholder}/>
    }
  }
}

Text.propTypes = {
  value: PropTypes.string,
  contClasses: PropTypes.string,
  id: PropTypes.string.isRequired,
  inputClasses: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  help: PropTypes.string,
  helpClasses: PropTypes.string
}

export default Text