import * as React from 'react'
import Button from '../Button/Button'

import { Portal } from './Portal'

export class Modal extends React.Component {
  state = {
    opened: false,
    type: this.props.type,
    textA: this.props.textA,
    textB: this.props.textB,
    buttonA: this.props.classButtonA,
    buttonB: this.props.classButtonB
  }
  open = () => {
    this.setState({ opened: true })
    setTimeout(() => {this.setState({ opened: true })}, 0)
  }

  close = () => {
    this.setState({ opened: false })
  }
  render () {
    return (
      <React.Fragment>
        <Button
          type='button'
          text={this.props.textA}
          className={this.state.buttonA}
          handleClick={this.open}/>
        {this.state.opened && (
          <Portal selector='#modal'>
            <div className='overlay'>
              <div className='modal'>
                <div className='Container'>
                  <Button
                    text={this.props.textB}
                    type='button'
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
              <style jsx>{`
                .Container {
                  position: relative;
                }
                .overlay {
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.7);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                }
                .modal {
                  background-color: white;
                  position: absolute;
                  overflow: scroll;
                  top: 10%;
                  right: 10%;
                  bottom: 10%;
                  left: 10%;
                  padding: 1em;
                }
              `}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}
