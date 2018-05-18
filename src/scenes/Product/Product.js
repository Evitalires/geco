import React, { Component } from 'react'
import ProductUI from './ProductUI'

class Product extends Component {
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
      <ProductUI
        {...this.state}
        handleSave={this.handleSave}
        handleUpdate={this.handleUpdate}
      />
    )
  }
}

export default Product
