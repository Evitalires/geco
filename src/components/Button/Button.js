import React, { Component } from 'react'
import ButtonUI from './ButtonUI'

class Button extends Component {
  state = {
    textInput: this.props.textInput,
    textLabel: this.props.textLabel,
    type: this.props.type,
    className: this.props.className
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({textInput: nextProps.textInput})
  }
  render() {
    return(
      <ButtonUI
        {...this.state}
        handleClick={this.handleClick}
      />
    )
  }
}

export default Button
