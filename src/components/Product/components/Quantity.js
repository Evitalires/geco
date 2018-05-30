import React, { Component } from 'react'
import { HandleError } from './utils/utils'
import Field from '../.././Field/Field'

class Quantity extends Component {
  state = {
    error: false,
    inputText: this.props.inputText,
    inputName: this.props.inputName,
    labelText: this.props.labelText
  }
  handleClick = event => {
  }
  handleChange = event => {
    (this.props.handleChange) && this.props.handleChange(event.target.value, "Quantity")
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  componentWillReceiveProps(nextProps){
    this.setState({inputText: nextProps.inputText})
  }
  render() {
    return (
      <Field
        {...this.state}
        setRef={this.setRef}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default Quantity
