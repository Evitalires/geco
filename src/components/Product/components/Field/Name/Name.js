import React, { Component } from 'react'
import NameUI from './NameUI'

class Name extends Component {
  state = {
    error: false,
    type: this.props.type,
    value: this.props.value
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
    if(this.input.className.search(' border') < 0) {
      this.input.className = ' border'
    }
    this.handleFocus(event)
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  handleBlur = event => {
    this.input.className = this.input.className.replace(' border', '')

    this.setState({
      value: event.target.value
    })
    console.log("Blur");
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
      console.log(document.activeElement)
    }, 0)
  }
  render() {
    return (
      <NameUI
        {...this.state}
        setRef={this.setRef}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
        >
      </NameUI>
    )
  }
}

export default Name
