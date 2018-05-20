import React, { Component } from 'react'
import Finder from '../.././Finder/Finder'

class Name extends Component {
  state = {
    error: false,
    inputText: this.props.inputText,
    inputName: this.props.inputName,
    labelText: 'Descripción',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
  }
  handleChange = event => {
    this.setState({inputText: event.target.value})
    //(this.props.handleChange) && this.props.handleChange(event.target.value)
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log("Submit")
  }
  handleFocus = event => {
    event.persist()
    event.target.select()
    setTimeout(() => {
      event.target.selectionStart = event.target.value.length;
      event.target.selectionEnd = event.target.value.length;
      event.target.focus()
    }, 200)
  }
  render() {
    return (
      <Finder
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

export default Name
