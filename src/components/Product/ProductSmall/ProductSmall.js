import React, { Component } from 'react'
import ProductSmallUI from './ProductSmallUI'

class ProductSmall extends Component {
  state = {
    helper: this.props.helper,
    id: this.props.id,
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity,
    className: (this.props.className) ? this.props.className : 'productSmall' ,
  }
  handleAdd = () => {
    this.props.handleAdd && this.props.handleAdd(this.state)
  }
  handleAdder = () => {
    let cantidad = Number(this.state.quantity) + 1
    console.log(this.state.total);
    this.setState({
      quantity: cantidad
    })
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  handleRemove = () => {
    if(this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  handleChange = (value, type) => {
    console.log(this.setState);
    if(type == 'Quantity') {
      this.setState({ quantity: value})
    }
    else if(type == 'Total'){
      let cant = (value / this.state.price).toFixed()
      console.log(this.state.price, cant);
      if(cant < 1) {
        this.setState({
          quantity: 1,
          price: value
        })
      }
      else {
        this.setState({
          quantity: cant,
          price: (value / cant).toFixed()
        })
      }
    }
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      name: nextProps.name,
      price: nextProps.price,
      quantity: nextProps.quantity,
    })
  }
  render(){
    return (
      <ProductSmallUI
        {...this.state}
        handleAdd={this.handleAdd}
        handleAdder={this.handleAdder}
        handleRemove={this.handleRemove}
        handleChange={this.handleChange}
      />
    )
  }
}

export default ProductSmall
