import React, { Component } from 'react'
import ProvidersUI from './ProvidersUI'

class Providers extends Component {
  state = {
    product: {},
    selected: this.props.selected
  }
  handleSave = product => {
    console.log('Voy a guardar');
  }
  handleUpdate = product => {
    this.setState({ product: product})
  }
  handleNewProvider = () => {
    console.log('Creando Nuevo provedor');
    this.setState({
      selected: 'Registrar'
    })

  }
  render() {
    return(
      <ProvidersUI
        {...this.state}
        handleSave={this.handleSave}
        handleUpdate={this.handleUpdate}
        handleNewProvider={this.handleNewProvider}
      />
    )
  }
}

export default Providers
