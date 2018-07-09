import * as React from 'react'
import Button from '../Button/Button'

import { Portal } from './Portal'

export class Modal extends React.Component {
  state = {
    title: this.props.title,
    trigger: this.props.trigger,
    opened: this.props.opened,
    triggerText: this.props.triggerText,
    triggerClass: this.triggerClass,
    modalClass: this.props.modalClass,
    closeText: this.props.closeText,
    closeClass: this.props.closeClass,

    mhb: this.props.mhb,
    tA: this.props.tA,
    mbp: this.mbp,
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
  componentDidMount() {
  }
  render () {
    let {
      trigger,
      triggerText,
      triggerClass,
      opened,
      modalClass,
      title,
      closeText,
      mhb,
      tA,
      mbp,
    } = this.state
    return (
      <React.Fragment>
        {
          //Trigger Modal
          trigger
          ? trigger
          :
          <Button
            type='button'
            textInput={ triggerText }
            className={ triggerClass }
            handleClick={this.open}
          />
        }
        { opened && (
          <Portal selector='#modal'>
            <div className='overlay'>
              <div className={ modalClass }>
                <div className='modalContainer'>
                  <div className="modalHeader">
                    <h1>{ title }</h1>
                    <Button
                      type='button'
                      textInput={ closeText }
                      handleClick={this.close}
                      className={this.state.closeButton || ''}
                    />
                  </div>
                  <div className="modalBody">
                    {
                      this.props.children
                    }
                  </div>
                </div>
              </div>
              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>
              <style jsx>{`
                .overlay {
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  position: fixed;
                  background-color: rgba(0, 0, 0, 0.7);
                }
                .modalHeader {
                  display: grid;
                  position: sticky;
                  height: 2em;
                  padding: .5em;
                  grid-template-columns: 1fr 2em;
                }
                .modalHeader h1 {
                  margin: 0;
                  font-weight: normal;
                  text-align: ${ tA != undefined ? tA : ' left ' };
                  color: var(--gray);
                  font-size: 1.5em;
                }
                .modalBody {
                  padding: ${ mbp != undefined ? mbp : '0'}em;
                }
                .modalContainer {
                  position: relative;
                }
                .modalStandard {
                  top: 10%;
                  left: 10%;
                  right: 10%;
                  bottom: 10%;
                  padding: 1em;
                  overflow: scroll;
                  position: absolute;
                  background-color: #E0EDF3;
                }
                .modalComplete {
                  top: 0%;
                  left: 0%;
                  right: 0%;
                  bottom: 0%;
                  overflow: scroll;
                  position: absolute;
                  background: #E0EDF3;
                }
                .modalComplete .modalHeader {
                  top: 0;
                  background: ${ mhb != undefined ? mhb : 'var(--bk-dark)'};
                  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                }
                .modalAlert {
                  top: 20%;
                  left: 10%;
                  right: 10%;
                  bottom: 35%;
                  padding: 1em;
                  position: absolute;
                  background-color: #E0EDF3;
                }
              `}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}
