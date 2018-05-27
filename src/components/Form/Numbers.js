import React, { Component } from 'react'
import Finder from '../Finder/Finder.js'

class Numbers extends Component {
  state = {
    error: false,
    value: this.props.value,
    inputType: this.props.inputType,
    inputText: this.props.inputText,
    inputName: this.props.inputName,
    inputPlaceHolder: this.props.inputPlaceHolder,
    labelText: this.props.labelText,
  }
  setRef = element => {
    this.input = element
  }
  handleClick =  event => {
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleChange = event => {
    let text = event.target.value.replace(/([^0-9])/gi, '')
    this.setState({
      inputText: text,
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

export default Numbers
