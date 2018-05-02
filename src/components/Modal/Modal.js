import * as React from 'react'
import Button from '../Button/Button'

import { Portal } from './Portal'
import { ModalStyles } from './styles'

export class Modal extends React.Component {
  state = {
    opened: this.props.opened,
    type: this.props.type,
    textA: this.props.textA,
    textB: this.props.textB,
    buttonA: this.props.classButtonA,
    buttonB: this.props.classButtonB,
    classModal: this.props.classModal,
  }
  open = () => {
    this.setState({ opened: true })
    setTimeout(() => {this.setState({ opened: true })}, 0)
    setTimeout(() => {(this.props.handleClick) && this.props.handleClick()}, 0)
  }
  close = () => {
    this.setState({ opened: false })
    this.props.handleClose && this.props.handleClose()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      opened: nextProps.opened
    })
  }
  render () {
    return (
      <React.Fragment>
        <Button
          type='button'
          text={this.props.textA}
          className={this.state.buttonA}
          handleClick={this.open}
        />
        {this.state.opened && (
          <Portal selector='#modal'>
            <div className='overlay'>
              <div className={this.props.classModal}>
                <div className='Container'>
                  <Button
                    type='button'
                    text={this.props.textB}
                    handleClick={this.close}
                    className={this.state.buttonB}/>
                  {
                    this.props.children
                  }
                </div>
              </div>
              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>
              <style jsx>{ModalStyles}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}
