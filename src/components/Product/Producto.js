import React, { Component } from 'react'
import ProductoUI from './ProductoUI'

class Producto extends Component {
  state = {
    helper: this.props.helper,
    quantity: this.props.quantity,
    id: this.props.id,
    name: this.props.name,
    price: this.props.price,
    total: `$ ${this.props.price * this.props.quantity}`
  }
  handleAdd = () => {
    this.props.handleAdd && this.props.handleAdd(this.state)
  }
  handleAdder = () => {
    let cantidad = Number(this.state.quantity) + 1
    this.setState({
      quantity: cantidad,
      total: ` $ ${this.state.price * (cantidad)}`
    })
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  handleRemove = () => {
    if(this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
        total: `$ ${this.state.price * (this.state.quantity - 1)}`
      })
    }
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  handleChange = (value, type) => {
    value = Number(value.replace(/([ $ ])/, ""))
    if(type == "Quantity") {
      this.setState({
        quantity: value,
        total: `$ ${this.state.price * value}`
      })
    }
    else if(value % this.state.price >= 0){
      let cant = value / this.state.price
      this.setState({
        quantity: cant.toFixed(),
        total: `$ ${value}`
      })
    }
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
  }
  render(){
    return (
      <ProductoUI
        {...this.state}
        handleAdd={this.handleAdd}
        handleAdder={this.handleAdder}
        handleRemove={this.handleRemove}
        handleChange={this.handleChange}
      />
    )
  }
}

export default Producto
