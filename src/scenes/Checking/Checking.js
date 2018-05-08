import React, { Component, Fragment } from 'react'
import Data from '../../services/api.json'
import CheckingUI from './CheckingUI'
import { checkingStyles } from './styles'

class Checking extends Component {
  state = {
    length: 0,
    typePay: 'Efectivo',
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
    textFinder: '',
    openPrint: false,
    openError: false,
    openTypePay: false
  }
  setRef = element => {
    this.input = element
  }
  fetchData = text => {
    this.setState({textFinder: text})
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
    let repeat
    this.state.products.map(
      (producto) => (producto.id == data.id)
      ? repeat = true
      : repeat = false
    )
    if(repeat) {
      this.setState({
        products: this.state.products.map(
          (producto) => producto.id === data.id
          ? data.quantity = producto.quantity
          : repeat = false)
      })
      console.log(data);
      data.quantity = `${++data.quantity}`
      data.total = `$ ${data.price * data.quantity}`
      console.log(data.quantity, data.total);

      this.setState({
        options: []
      })
      console.log(data);
      this.handleUpdate(data)
    }
    else {
      repeat = false
      this.setState({
        options: [],
        textFinder: '',
        products: [...this.state.products, data],
      })
      setTimeout(() => {
        this.countTotal(this.state.products)
      }, 0)
    }
  }
  handleUpdate = data => {
    this.setState({
      textFinder: '',
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
    console.log('Había que hacer algunos cambios');
    this.fetchData(event.target.value)
  }
  handleChangeTotal = event => {
    let value = event.target.value
    let effective = Number(value.replace(/([^0-9])/gi, ''))
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
        textFinder: '',
        openError: false
      })
    } else {
      this.handleCloseOpenError('Open')
    }
    console.log(Data);
  }
  handleSaveTypePay = text => {
    this.setState({typePay: text})
  }
  handleOpenCloseTypePay = action => {
    if(action == 'Open') {
      this.setState({openTypePay: true})
    }
    else if (action == 'Close') {
      this.setState({openTypePay: false})
    }
  }
  handleCloseOpenError = action => {
    if('Open') {
      this.setState({openError: true})
      setTimeout(() => this.setState({openError: true}), 0)
    }
    if('Close' == action){
      this.setState({openError: false})
      setTimeout(() => this.setState({openError: false}), 0)
    }
  }
  render() {
    return (
      <Fragment>
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
          handleCloseOpenError={this.handleCloseOpenError}
        />
      </Fragment>
    )
  }
}
export default Checking
