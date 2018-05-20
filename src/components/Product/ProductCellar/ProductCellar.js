import React, { Component } from 'react'
import ProductCellarUI from './ProductCellarUI'

class ProductCellar extends Component {
  state = {
    id: this.props.id || '',
    name: this.props.name || '',
    cost: this.props.cost || '',
    percent: this.props.percent || '',
    price: this.props.price || '',
    utility: this.props.utility || '',
    quantity: this.props.quantity || '',
    inventory: this.props.inventory || '',
    inventoryNegative: this.props.inventoryNegative || null,
    productBelongs: this.props.productBelongs || false,
    classificationIva: this.props.classificationIva || null,
    category: this.props.category || null
  }
  handleId = value => {
    this.setState({ id: value})
    this.handleUpdate()
  }
  handleName = text => {
    this.setState({ name: text})
    this.handleUpdate()
  }
  handleCost = value => {
    this.setState({ cost: value})
    this.handleUpdate()
  }
  handleQuantity = value => {
    this.setState({ quantity: value })
    this.handleUpdate()
  }
  handleUpdate = () => {
    setTimeout(() => {
      (this.props.handleUpdate) && this.props.handleUpdate(this.state)
    }, 0)
  }
  render(){
    return (
      <ProductCellarUI
        {...this.state}
        handleId={this.handleId}
        handleName={this.handleName}
        handleCost={this.handleCost}
        handlePrice={this.handlePrice}
        handlePercent={this.handlePercent}
        handleUtility={this.handleUtility}
        handleQuantity={this.handleQuantity}
        handleInventory={this.handleInventory}
        handleInventoryNegative={this.handleInventoryNegative}
        handleProductBelongs={this.handleProductBelongs}
        handleClassificationIva={this.handleClassificationIva}
        handleCategory={this.handleCategory}
      />
    )
  }
}

export default ProductCellar
