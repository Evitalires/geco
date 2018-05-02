import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'
import  Check from '../../components/Icons/check'
import FieldCheck from './components/FieldCheck'

class TypePay extends Component {
  state = {
    opened: this.props.opened,
    select: this.props.typePay
  }
  handleChange = event => {
    let label = event.target.parentElement.previousElementSibling
    this.setState({select: label.innerText})
    this.saveChanges(label.innerText)
  }
  setIsChecked = text => {
    return (text == this.state.select) ? true : false
  }
  saveChanges = text => {
    (this.props.handleSaveTypePay) && this.props.handleSaveTypePay(text)
  }
  openModal = () => {
    (this.props.handleOpenCloseTypePay) && this.props.handleOpenCloseTypePay('Open')
  }
  closeModal = () => {
    (this.props.handleOpenCloseTypePay) && this.props.handleOpenCloseTypePay('Close')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({opened: nextProps.opened})
  }
  render() {
    let fecha = new Date()
    return (
      <Fragment>
        <Modal
          textA={this.state.select.split(' ').join('')}
          textB='X'
          type='button'
          opened={this.state.opened}
          classModal='modalComplete'
          classButtonA='buttonDark'
          classButtonB='buttonClosePrint'
          handleClose={this.closeModal}
          handleClick={this.openModal}
        >
          <h1>Métodos de Pago</h1>
          <article
            onChange={this.handleChange}
             >
            <ul>
              <FieldCheck
                text='Efectivo'
                checked={this.setIsChecked('Efectivo')}/>
              <FieldCheck
                text='Cheque'
                checked={this.setIsChecked('Cheque')}/>
              <FieldCheck
                text='Tarjeta de Crédito'
                checked={this.setIsChecked('Tarjeta de Crédito')}
              />
              <FieldCheck
                text='Tarjeta de Débito'
                checked={this.setIsChecked('Tarjeta de Débito')}
               />
              <FieldCheck
                text='Monedero Electrónico'
                checked={this.setIsChecked('Monedero Electrónico')}
              />
              <FieldCheck
                text='Vales de Despensa'
                checked={this.setIsChecked('Vales de Despensa')}
              />
              <FieldCheck
                text='Tarjeta de servicio'
                checked={this.setIsChecked('Tarjeta de servicio')}
              />
              <FieldCheck
                text='Otros'
                checked={this.setIsChecked('Otros')}
              />
            </ul>
          </article>
          <Button
            text='Guardar'
            className='buttonDark center'
            handleClick={this.closeModal}
          />
        </Modal>
        <style jsx>{`
          article {
            margin-bottom: 150px;
          }
          article ul {
            padding: 0;
            list-style: none;
          }
          h1 {
            color: #182C39;
            font-size: 26px;
            margin-top: 0px;
            margin-bottom: 56px;
            text-align: center;
            font-family: arial;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default TypePay
