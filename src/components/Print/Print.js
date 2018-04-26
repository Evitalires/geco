import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'

class Print extends Component {
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
          textA='Imprimir'
          textB='X'
          type='button'
          opened={this.props.opened}
          classModal='modalStandard'
          classButtonA='buttonDark'
          classButtonB='buttonClosePrint'
        >
        <article className="Print">
            <section className="BodyCheck">
              <h3>{this.props.user}</h3>
              <p>{this.props.addresses}</p>
              <p>{this.props.nit}</p>
              <h3>Gracias por su compra</h3>
              <p>4-21-2018 11:38:15 AM</p>
              <p>Pago de Contado</p>
              <p>FACTURA DE VENTA: <b>53984</b></p>
            </section>
            <section className='ListProducts'>
              <h3>Productos</h3>
              {
                this.props.products.map((data, key) => (
                  <Producto
                    {...data}
                    key={key}
                    helper=''
                    className='ProductPrint'
                  />
                ))
              }
            </section>
            <section className='Sale'>
              <p>Total venta neto: <span>{this.props.total}</span></p>
              <p>Total Iva: <span>$ 0</span></p>
              <p>Descuento: <span>$ 0</span></p>
              <h3>Total a pagar: <span>{this.props.total}</span></h3>
              <p>Total pagado: <span>{this.props.total}</span></p>
              <p>Efectivo recibido: <span>{this.props.efective}</span></p>
              <h3>Cambio: <span>{this.props.changet}</span></h3>
            </section>
            <section className='Remark'>
              <p>Cajero: Juan Miguel</p>
              <Button
                type='button'
                text='Imprimir'
                className='buttonPrintModal'
                handleClick={this.print}
              />
            </section>
        </article>
        </Modal>
        <style jsx>{`
          .Print {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .Sale {
            width: 300px;
            padding: 10px 0px;
            margin: 10px 0px 10px 0px;
            border-bottom: 1px solid black;
            border-top: 1px solid black;
          }
          .ListProducts {
            width: 300px;
            margin: 25px 0px 25px 0px;
            border-top: 1px solid black;
          }
          .Sale p,
          .Sale h3 {
            display: flex;
            justify-content: space-between;
          }
          h3, p {
            text-align: center;
            background: white;
            opacity: 1;
            width: 100%;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Print
