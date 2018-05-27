import React, { Component } from 'react'
import ProvidersUI from './ProvidersUI'

class Providers extends Component {
  state = {
    product: {}
  }
  handleSave = product => {
    console.log('Voy a guardar');
  }
  handleUpdate = product => {
    this.setState({ product: product})
  }
  render() {
    return(
      <ProvidersUI
        {...this.state}
        handleSave={this.handleSave}
        handleUpdate={this.handleUpdate}
      />
    )
  }
}

export default Providers
