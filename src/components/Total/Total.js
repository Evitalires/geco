import React, { Component } from 'react'
import TotalUI from './TotalUI'

class Total extends Component {
  state = {
    total: this.props.total
  }
  componentWillReceiveProps(nextProps){
    this.setState({total: nextProps.total})
  }
  render() {
    return (
      <TotalUI
        total={this.state.total}
      >
        {
          this.props.children
        }
      </TotalUI>
    )
  }
}

export default Total
