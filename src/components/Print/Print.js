import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'

class Print extends Component {
  print = () => {
    (this.props.handlePrintSave) && this.props.handlePrintSave()
  }
  render() {
    let fecha = new Date()
    return (
      <Fragment>
        <Modal
          textA='Imprimir'
          textB='X'
          type='button'
          classButtonB='ButtonClosePrint'
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
                    className='ProductPrint'
                    key={key}
                    helper=''
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
                className='ButtonPrintModal'
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
