import React, { Component } from 'react'
import Finder from '../../../Finder/Finder'

class Name extends Component {
  state = {
    error: false,
    inputText: this.props.value,
    inputName: this.props.type,
    classArticle: 'productArticle',
    classForm: 'productForm',
    classInput: 'productInput',
    classLabel: 'productLabel',
    classMessage: 'productMessage',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
    event.persist()
    this.handleFocus(event)
  }
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }
  handleBlur = event => {
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
