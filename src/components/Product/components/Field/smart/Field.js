import React, { Component } from 'react'
import FieldUI from '../dumb/FieldUI'
import { FieldUtils } from '../FieldUtils.js'

class Field extends Component {
  state = {
    error: false,
    name: this.props.name,
    value: FieldUtils(this.props, 'state')
  }
  setRef = element => {
    this.input = element
  }
  handleClick =  async event => {
    event.persist()
    await this.setState({
      value: FieldUtils(this.input, 'click', this)
    })
    this.handleFocus(event)
  }
  handleBlur = event => {
    this.setState({
      value: FieldUtils(this.input, 'blur'),
    })
  }
  handleChange = event => {

    this.setState({
      value: FieldUtils(this.input, 'change'),
      error: FieldUtils(this.input, 'error', this)
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
    }, 1000)
  }
  render(){
    return(
        <FieldUI
          {...this.state}
          setRef={this.setRef}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleBlur={this.handleBlur}
          handleKeyUp={this.handleKeyUp}
          handleSubmit={this.handleSubmit}
          >
        </FieldUI>
    )
  }
}

export default Field
