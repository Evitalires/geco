import React, { Component } from 'react'
import ButtonUI from './ButtonUI'

class Button extends Component {
  state = {
    text: this.props.text
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  render() {
    return(
      <ButtonUI
        text={this.state.text}
        handleClick={this.handleClick}
      />
    )
  }
}

export default Button
