import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Producto from '../Product/Producto'
import { Modal } from '../../components/Modal/Modal'

class ErrorModal extends Component {
  state = {
    error: this.props.error,
    message: this.props.message
  }
  handleClose = () => {
    this.props.handleCloseOpenError && this.props.handleCloseOpenError('Close')
  }
  handleNext = () => {
    this.props.handleOk && this.props.handleOk()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.error
    })
  }
  render() {
    return (
      <Fragment>
        <Modal
          textA='Imprimir'
          textB='X'
          type='button'
          opened={this.state.error}
          classModal='modalAlert'
          handleClose={this.handleClose}
          classButtonB='buttonClosePrint'
        >
          <section>
            <h1>{this.state.message}</h1>
          </section>
          <section>
            <Button
              text='Sí'
              type='button'
              className='buttonGray'
              handleClick={this.handleNext}
            />
            <Button
              text='No'
              type='button'
              className='buttonDark'
              handleClick={this.handleClose}
            />
          </section>
        </Modal>
        <style jsx>{`
          section {
            display: flex;
            margin: 50px 24px;
            justify-content: space-around;
          }
          section h1 {
            margin: 0;
            color: #164461;
            font-size: 24px;
            text-align: center;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ErrorModal
