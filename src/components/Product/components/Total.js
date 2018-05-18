import React, { Component } from 'react'
import Finder from '../.././Finder/Finder'

class Total extends Component {
  state = {
    error: false,
    inputText: `$ ${this.props.price * this.props.quantity}`,
    inputName: this.props.type,
    labelText: 'Precio final',
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
  handleBlur = event => {
    let value = this.replace(event.target.value)
    console.log(value);
    (this.props.handleChange) && this.props.handleChange(value, 'Total')
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
      inputText: `$ ${nextProps.price * nextProps.quantity}`
    })
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

export default Total
