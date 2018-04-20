import React, { Component } from 'react'
import PriceUI from './PriceUI'

class Price extends Component {
  state = {
    error: false,
    type: this.props.type,
    value: this.props.value
  }
  setRef = element => {
    this.input = element
  }
  setSize = length => {
    this.input.className = this.input.className.replace(' border', '')
    this.input.style.width = `${(length * 8) + 30}px`
    this.input.parentElement.style.width = `${(length * 8) + 30}px`
  }
  handleClick = event => {
    this.setSize(event.target.value.length)
    if(this.input.className.search(' border') < 0) {
      this.input.className = ' border'
      this.input.style.textAlign = 'center'
    }
    this.handleFocus(event)
  }
  handleChange = event => {
    let form = this.input.parentElement
    //styles
    this.input.style.textAlign = 'center'
    if(event.target.value.length < 6) {
      let large = `${(event.target.value.length * 8) + 30}px`
      form.style.width = large
      this.input.style.width = large
    }
    else {
      form.style.overflow = 'hidden'
    }
    this.setState({
      value: event.target.value
    })
    this.props.handleChange(event.target.value, 'Price')
  }
  handleBlur = event => {
    this.setSize(event.target.value.length)
    this.setState({
      value: event.target.value
    })
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
    this.setState({value: nextProps.value})
  }
  render() {
    return (
      <PriceUI
        {...this.state}
        setRef={this.setRef}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
        >
      </PriceUI>
    )
  }
}

export default Price
