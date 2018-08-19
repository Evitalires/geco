import React, { Component } from 'react'
import Icon from './Icon'

class Triangle extends Component {
  state = {
    optionsRotate: this.props.optionsRotate || null,
    colorHover: this.props.colorHover || null
  }
  handleClick = (event) => {
    if(this.state.optionsRotate != null) {
      this.toggleRotation()
    }
    this.props.handleClick(event);
  }
  toggleRotation = () => {
    let {
      rotate,
      optionsRotate,
     } = this.state

    if(optionsRotate[0] != rotate && rotate != null) {
      this.setState({
        rotate: optionsRotate[0]
      })
    }
    else {
      this.setState({
        rotate: optionsRotate[1]
      })
    }
  }
  render() {
    return (
      <Icon
        {...this.props}
        handleClick={this.handleClick}
        colorHover={this.props.colorHover}
        shadow='drop-shadow(2px 0px 1px var(--gray))'
        rotate={this.state.rotate || this.state.optionsRotate[0] || "0deg"}
        >
        <path d="M6 4l20 12-20 12z"></path>

      </Icon>
    )
  }
}

export default Triangle
