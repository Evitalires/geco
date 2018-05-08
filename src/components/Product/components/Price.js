import React, { Component } from 'react'
import Finder from '../.././Finder/Finder'

class Price extends Component {
  state = {
    error: false,
    inputText: this.props.value,
    inputName: this.props.type,
    labelText: 'Precio de venta',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
    event.persist()
    this.handleFocus(event)
  }
  handleChange = event => {
    this.props.handleChange(event.target.value, 'Price')
  }
  handleBlur = event => {
    this.props.handleChange(event.target.value)
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
    this.setState({inputText: nextProps.value})
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

export default Price
