import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'

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
        <article className="Print">
          <h1>Métodos de Pago</h1>
          <ul>
            <li>Efectivo</li>
            <li>Cheque</li>
            <li>Tarjeta de crédito</li>
            <li>Tarjeta de Débito</li>
            <li>Monedero Electrónico</li>
            <li>Vales de Despensa</li>
            <li>Tarjeta de servicio</li>
            <li>Otros</li>
          </ul>
        </article>
        </Modal>
        <style jsx>{`

        `}</style>
      </Fragment>
    )
  }
}

export default TypePay
