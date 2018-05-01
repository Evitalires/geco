import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'
import  Check from '../../components/Icons/check'
import FieldCheck from './components/check'

class TypePay extends Component {
  state = {
    opened: this.props.opened
  }
  print = () => {
    (this.props.handlePrintSave) && this.props.handlePrintSave()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      opened: nextProps.opened
    })
  }
  render() {
    let fecha = new Date()
    return (
      <Fragment>
        <Modal
          textA='Efectivo'
          textB='X'
          type='button'
          opened={this.props.opened}
          classModal='modalComplete'
          classButtonA='buttonDark'
          classButtonB='buttonClosePrint'
        >
          <h1>Métodos de Pago</h1>
          <article >
            <ul>
              <FieldCheck text='Efectivo'/>
              <FieldCheck text='Cheque'/>
              <FieldCheck text='Tarjeta de Crédito'/>
              <FieldCheck text='Tarjeta de Débito'/>
              <FieldCheck text='Monedero Electrónico'/>
              <FieldCheck text='Vales de Despensa'/>
              <FieldCheck text='Tarjeta de servicio'/>
              <FieldCheck text='Otros'/>
            </ul>
          </article>
          <Button
            text='Guardar'
            className='buttonDark center'
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
