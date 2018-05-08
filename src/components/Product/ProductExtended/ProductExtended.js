import React, { Component } from 'react'
import ProductExtendedUI from './ProductExtendedUI'

class ProductExtended extends Component {
  state = {
    id: '1012422221',
    name: 'Hola',
    price: 0,
    quantity: 1,
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
      />
    )
  }
}

export default ProductExtended
