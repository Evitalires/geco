import React, { Component } from 'react'
import ProductExtendedUI from './ProductExtendedUI'

class ProductExtended extends Component {
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
    setTimeout(() => {
      this.handlePercent(this.state.percent || 0)
    }, 0)
    this.handleUpdate()
  }
  handlePercent = percent => {
    let utility = (this.state.cost * percent) / 100
    this.setState({
      percent: percent,
      utility: utility,
      price: this.state.cost + utility
    })
    this.handleUpdate()
  }
  handlePrice = price => {
    let cost = this.state.cost
    let utility = ((price - cost) < 0) ? 0 : price - cost
    let percent = (utility * 100) / cost

    this.setState({
      price: price,
      utility: utility,
      percent: percent,
    })

    this.handleUpdate()
  }
  handleUtility = utility => {
    this.setState({
      utility: utility,
      price: this.state.cost + utility,
      percent: (utility * 100) / this.state.cost
    })
    this.handleUpdate()
  }
  handleQuantity = value => {
    this.setState({ quantity: value })
    this.handleUpdate()
  }
  handleInventory = value => {
    this.setState({ inventory: value })
    this.handleUpdate()
  }
  handleInventoryNegative = value => {
    this.setState({ inventoryNegative: value})
    this.handleUpdate()
  }
  handleProductBelongs = value => {
    this.setState({ productBelongs: value})
    this.handleUpdate()
  }
  handleClassificationIva = text => {
    this.setState({ classificationIva: text})
    this.handleUpdate()
  }
  handleCategory = text => {
    this.setState({ category: text })
    this.handleUpdate()
  }
  handleUpdate = () => {
    setTimeout(() => {
      (this.props.handleUpdate) && this.props.handleUpdate(this.state)
    }, 0)
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     id: nextProps.id,
  //     name: nextProps.name,
  //     price: nextProps.price,
  //     percent: nextProps.percent,
  //     quantity: nextProps.quantity,
  //   })
  // }
  render(){
    return (
      <ProductExtendedUI
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

export default ProductExtended
