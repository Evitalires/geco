import React, { Component } from 'react'
import ProductoUI from './ProductoUI'

class Producto extends Component {
  state = {
    helper: this.props.helper,
    className: this.props.className,
    id: this.props.id,
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity,
    total: `$ ${this.props.price * this.props.quantity}`
  }
  handleAdd = () => {
    this.props.handleAdd && this.props.handleAdd(this.state)
  }
  handleAdder = () => {
    let cantidad = Number(this.state.quantity) + 1
    console.log(this.state.total);
    this.setState({
      quantity: cantidad,
      total: `$ ${this.state.price * (cantidad)}`
    })
    this.props.handleUpdate && setTimeout( () => this.props.handleUpdate(this.state), 0)
    setTimeout(() => console.log(this.state.total))
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
    if(type == 'Quantity') {
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
