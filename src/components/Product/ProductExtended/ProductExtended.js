import React, { Component } from 'react'
import ProductExtendedUI from './ProductExtendedUI'

class ProductExtended extends Component {
  state = {
    id: '1012422221',
    name: 'Hola',
    price: 2000,
    quantity: 1,
  }
  handlePrice = value => {
    value = value.replace(/([^0-9])/gi, '')
    this.setState({price: value})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      name: nextProps.name,
      price: nextProps.price,
      total: nextProps.total,
      quantity: nextProps.quantity,
    })
  }
  render(){
    return (
      <ProductExtendedUI
        {...this.state}
        handlePrice={this.handlePrice}
      />
    )
  }
}

export default ProductExtended
