import React, { Component } from 'react'
import ButtonUI from './ButtonUI'

class Button extends Component {
  state = {
    text: this.props.text,
    type: this.props.type,
    className: this.props.className
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text})
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
