// import * as React from 'react'
import React, { Component, Fragment } from 'react'

import Button from '../Button/Button'


import { Portal } from './Portal'

export class Modal extends Component {
  state = {
    //modal structure
    modalArea: this.props.modalArea,
    modalHeader: this.props.modalHeader,
    modalBody: this.props.modalBody,
    modalFooter: this.props.modalFooter,
    modalWidth: this.props.modalWidth,
    modalClass: this.props.modalClass,
    //modal Status
    opened: this.props.opened,
    headerTitle: this.props.headerTitle,
    //modal Trigger
    trigger: this.props.trigger,
    triggerText: this.props.triggerText,
    triggerClass: this.triggerClass,
    //Modal Closer
    closerText: this.props.closerText,
    closerClass: this.props.closerClass,
    //Styles modal
      // Header
      mhb: this.props.mhb,
      mhp: this.props.mhp,
      tA: this.props.tA,
      mhH: this.props.mhH,
      // Body
      mbp: this.mbp,
      // Footer
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
    this.setState({ opened: nextProps.opened })
    setTimeout(()=> {
      this.setState({
        opened: nextProps.opened
      })
    }, 0)
  }
  render () {
    let {
      trigger,
      triggerText,
      triggerClass,
      opened,
      modalClass,
      headerTitle,
      closerText,
      mhb,
      tA,
      mbp,
      mhp,
      mhH,
    } = this.state
    return (
      <Fragment>
        {
          //Trigger Modal
          trigger
          ? trigger
          :
          <Button
            text={ triggerText }
            className={ triggerClass }
            handleClick={this.open}
          />
        }
        { opened && (
          <Portal selector='#modal'>
            <div className='overlay'>
              <div className={ 'modalContainer ' + modalClass }>
                <div className="modalHeader">
                  <h1>
                    { headerTitle }
                  </h1>
                  <Button
                    type='button'
                    text={ closerText }
                    justifySelf='right'
                    alignSelf='baseline'
                    padding='.2em .5em 0 0'
                    handleClick={this.close}
                    textColorHover='var(--bk-light)'
                    className={this.state.closeButton || ''}
                  />
                  {
                    this.state.modalHeader
                  }
                </div>
                <div className='modalBody'>
                  {
                    this.props.children || this.state.modalBody
                  }
                </div>
                <div className='modalFooter'>
                  {
                    this.state.modalFooter
                  }
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
                  min-height: 2em;
                  padding: ${mhp ? mhp : '.5em'};
                  background: ${mhb};
                  grid-template-columns: 1fr 2em;
                }
                .modalHeader h1 {
                  margin: 0;
                  display: grid;
                  font-size: 1.5em;
                  color: var(--gray);
                  font-weight: normal;
                  align-content: space-evenly;
                  height: ${ mhH ? mhH : 'auto' };
                  text-align: ${ tA != undefined ? tA : ' left ' };
                }
                .modalBody {
                  overflow: scroll;
                  padding: ${ mbp != undefined ? mbp : '0'}em;
                }
                .modalContainer {
                  position: relative;
                  display: grid;
                  grid-template-rows: auto 1fr auto;
                  grid-template-areas:  " modalHeader "
                                        " modalBody "
                                        " modalFooter";
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
                  overflow: auto;
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
      </Fragment>
    )
  }
}
