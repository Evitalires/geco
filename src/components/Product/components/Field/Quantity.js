import React, { Component } from 'react'
import Finder from '../../../Finder/Finder'

class Quantity extends Component {
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
  handleClick = event => {
    this.handleFocus(event)
  }
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
    this.props.handleChange(event.target.value, "Quantity")
  }
  handleBlur = event => {
    this.setState({
      inputText: event.target.value
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

export default Quantity
