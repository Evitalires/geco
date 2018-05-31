import React, { Component } from 'react'
import FieldInput from '../Field/FieldInput'

class Numbers extends Component {
  state = {
    error: false,
    label: this.props.label,
    value: this.props.value || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className || '',
  }
  replace = value => {
    return value = Number(value.replace(/([^0-9])/, ""))
  }
  search = value => {
    if(value.search(/([^0-9])/) > -1) {
      this.setState({ error: 'Solo se permiten números' })
    }
  }
  handleClick = event => {
    (this.props.handleClick) && this.props.handleClick(event)
  }
  handleChange = event => {
    this.search(event.target.value)
    let value = this.replace(event.target.value)
    console.log(value);
    this.setState({
      value: value
    });
    setTimeout(() => {
      this.setState({error: false})
    }, 5000);
    (this.props.handleChange) && this.props.handleChange(event)
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  render() {
    return (
      <FieldInput
        {...this.state}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
      />
    )
  }
}

export default Numbers
