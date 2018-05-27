import React, { Component } from 'react'
import Finder from '../Finder/Finder.js'

class Text extends Component {
  state = {
    error: false,
    id: this.props.labelText,
    formClass: this.props.class,
    inputText: this.props.inputText,
    inputPlaceholder: this.props.inputPlaceholder,
    inputType: this.props.inputType,
    inputName: this.props.inputName,
    labelText: this.props.labelText,
  }
  handleClick = event => {
  }
  handleChange = value => {
    this.setState({inputText: value})

    //(this.props.handleChange) && this.props.handleChange(event)
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  render() {
    return (
      <Finder
        {...this.state}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        handleUpdate={this.handleChange}
      >
        {
          this.props.children
        }
      </Finder>
    )
  }
}

export default Text
