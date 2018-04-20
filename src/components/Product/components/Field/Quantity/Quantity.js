import React, { Component } from 'react'
import QuantityUI from './QuantityUI'

class Quantity extends Component {
  state = {
    error: false,
    type: this.props.type,
    quantity: this.props.quantity
  }
  handleClick = event => {
    this.handleFocus(event)
  }
  handleChange = event => {
    this.setState({
      quantity: event.target.value
    })
    this.props.handleChange(event.target.value, "Quantity")
  }
  handleBlur = event => {
    this.setState({
      quantity: event.target.value
    })
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
  componentWillReceiveProps(nextProps){
    this.setState({quantity: nextProps.quantity})
  }
  render() {
    return (
      <QuantityUI
        {...this.state}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
        >
      </QuantityUI>
    )
  }
}

export default Quantity
