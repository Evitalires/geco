import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import Options from '../../components/Options/Options'
import { Modal } from '../../components/Modal/Modal'

class ErrorModal extends Component {
  state = {
    error: this.props.error,
    message: this.props.message
  }
  handleClose = () => {
    this.props.handleCloseOpenError && this.props.handleCloseOpenError('Close')
  }
  handleConfirm = () => {
    this.props.handleConfirm && this.props.handleConfirm()
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
          <Options
            message={this.state.message}
            messageConfirm={'Sí'}
            messageDeny={'No'}
            handleConfirm={this.handleConfirm}
            handleDeny={this.handleClose}
          />
        </Modal>
      </Fragment>
    )
  }
}

export default ErrorModal
