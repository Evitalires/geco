import React, { Component } from 'react'
import FieldInput from '../Field/FieldInput'

class Text extends Component {
  state = {
    error: false,
    label: this.props.label,
    value: this.props.value || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className || '',
  }
  handleClick = event => {
    (this.props.handleClick) && this.props.handleClick(event)
  }
  handleChange = event => {
    if(this.props.handleChange == undefined) {
      this.setState({value: event.target.value})
    }
    else {
      this.props.handleChange(event)
    }
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  render() {
    return (
      <FieldInput
        {...this.state}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        handleClick={this.handleClick}
      />
    )
  }
}

export default Text
