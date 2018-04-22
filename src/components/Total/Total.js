import React, { Component } from 'react'
import TotalUI from './TotalUI'

class Total extends Component {
  state = {
    total: this.props.total,
    change: this.props.change,
    effective: this.props.effective,
  }
  handleClick = () => {
    (this.props.handleClick) && this.props.handleClick()
  }
  handleChange = (event) => {
    (this.props.handleChange) && this.props.handleChange(event)
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      total: nextProps.total,
      change: nextProps.change,
      effective: nextProps.effective,
    })
  }
  render() {
    return (
      <TotalUI
        {...this.state}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
      >
        {
          this.props.children
        }
      </TotalUI>
    )
  }
}

export default Total
