import React, { Component } from 'react'
import Data from '../../services/api.json'
import CheckingUI from './CheckingUI'
import { checkingStyles } from './styles'

class Checking extends Component {
  state = {
    length: 0,
    typePay: 'Efectivo',
    error: false,
    options: [],
    products: [],
    user: Data.user.name,
    casher: Data.user.cashiers[0].name,
    atm: Data.user.cashiers[0].atm,
    nit: Data.user.nit,
    addresses: Data.user.addresses,
    effective: '',
    change: '',
    total: 0,
    openTypePay: false
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
          options: [this.state.options, array],
          length: productos[i].name.length
        })
      }
      else if(productos[i].price == text) {
        array = [...array, productos[i]]
        this.setState({
          options: array,
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
  handlePrintSave = () => {
    this.handleSave()
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
  handleChangeTotal = event => {
    let effective = Number(event.target.value.replace(/([^0-9])/gi, ''))
    this.setState({
      effective: `$ ${effective}`,
      change: `$ ${effective - this.state.total}`
    })
  }
  handleSave = event => {
    if(this.state.total > 1) {
      Data.user.checks = [...Data.user.checks, {
        user: this.state.user,
        nit: this.state.nit,
        typePay: this.state.typePay,
        casher: this.state.casher,
        products: this.state.products,
        atm: this.state.atm,
        addresses: this.state.addresses,
        effective: this.state.effective,
        change: this.state.change,
        total: this.state.total
      }]
      this.setState({
        length: 0,
        options: [],
        products: [],
        user: Data.user.name,
        typePay: this.state.typePay,
        casher: Data.user.cashiers[0].name,
        atm: Data.user.cashiers[0].atm,
        nit: Data.user.nit,
        addresses: Data.user.addresses,
        effective: '',
        change: '',
        total: 0,
        error: false
      })
    } else {
      this.openModalError()
    }
    console.log(Data);
  }
  handleSaveTypePay = text => {
    this.setState({typePay: text})
  }
  handleOpenCloseTypePay = action => {
    console.log('De nuevo acá, en checking');
    if(action == 'Open') {
      this.setState({openTypePay: true})
    }
    else if (action == 'Close') {
      this.setState({openTypePay: false})
    }
  }
  openModalError = () => {
    this.setState({error: true})
    setTimeout(() => this.setState({error: true}), 0)
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
          handleOpenCloseTypePay={this.handleOpenCloseTypePay}
          handleSaveTypePay={this.handleSaveTypePay}
          handlePrintSave={this.handlePrintSave}
          handleChangeTotal={this.handleChangeTotal}
          handleCloseModalError={this.handleCloseModalError}
        />
      </div>
    )
  }
}
export default Checking
