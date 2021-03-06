import React, { Component } from 'react'
import Field from '../.././Field/Field'

class Price extends Component {
  state = {
    error: false,
    inputText: `$ ${this.props.inputText}`,
    inputName: this.props.inputName,
    labelText: this.props.labelText,
  }
  setRef = element => {
    this.input = element
  }
  replace = value => {
    return value = Number(value.replace(/([$ ])/, ""))
  }
  handleClick = event => {
    event.persist()
    this.handleFocus(event)
  }
  handleChange = event => {
    let value = this.replace(event.target.value)
    this.setState({inputText: value})
    console.log();
    (this.props.handleChange) && this.props.handleChange(value, 'Total')
  }
  handleBlur =  event => {
    let value =  this.replace(event.target.value)
    console.log();
    (this.props.handleBlur) && this.props.handleBlur(value, 'Total')
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  handleFocus = event => {
    event.persist()
    event.target.select()
    setTimeout(() => {
      event.target.selectionStart = event.target.value.length;
      event.target.selectionEnd = event.target.value.length;
      event.target.focus()
    }, 0)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      inputText: `$ ${nextProps.inputText}`
    })
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

export default Price
