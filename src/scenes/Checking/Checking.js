import React, { Component } from 'react'
import Data from '../../services/api.json'
import CheckingUI from './CheckingUI'
import { checkingStyles } from './styles'

class Checking extends Component {
  state = {
    length: 0,
    options: [],
    products: [],
    total: 0
  }
  setRef = element => {
    this.input = element
  }
  fetchData = text => {
    let productos = Data.user.productos
    let array = []
    //Buscando coincidencias entre texto y DB de productos
    for(let i = 0; i < productos.length; i++){
      if (productos[i].id == text) {
        array = productos[i]
        this.setState({
          options: [array],
          length: productos[i].id.length
        })
      }
      else if(productos[i].name == text){
        array = productos[i]
        this.setState({
          options: [array],
          length: productos[i].name.length
        })
      }
      else if(productos[i].price == text) {
        array = productos[i]
        this.setState({
          options: [array],
          length: productos[i].price.length
        })
      }
      //Evaluando si el text que tiene coincidencias ha cambiado
    }
    if(this.state.length > text.length) {
      this.setState({
        options: [],
        length: 0
      })
    }
  }
  countTotal = () => {
    let total = 0;
    let products = this.state.products
    for(let i = 0; i < products.length; i++) {
      total += Number(products[i].total.replace('$', ''))
    }
    this.setState({
      total: total
    })
  }
  handleAdd = data => {
    this.setState({
      options: [],
      products: [...this.state.products, data],
    })
    setTimeout(() => this.countTotal(this.state.products), 0)
  }
  handleUpdate = data => {
    this.setState({
      products: this.state.products.map(
        (producto) => producto.id === data.id
        ? Object.assign({}, producto, {
          quantity: data.quantity,
          total: data.total
        })
        : producto)
    })
    setTimeout(() => this.countTotal(this.state.products), 0)
  }
  handleChange = event => {
    this.fetchData(event.target.value)
  }
  handleSave = event => {
    console.log('Se guardo la factura');
  }
  handlePrint = event => {
    console.log('Se activó el modal para imprimir');
  }
  handleEfective = event => {
    console.log('Se activa modal para dejar escribir el efectivo que se recibe');
  }
  render() {
    return (
      <div>
        <CheckingUI
          {...this.state}
          data={Data}
          setRef={this.setRef}
          handleAdd={this.handleAdd}
          handleUpdate={this.handleUpdate}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          handleSave={this.handleSave}
          handlePrint={this.handlePrint}
          handleEfective={this.handleEfective}
        />
      </div>
    )
  }
}
export default Checking
