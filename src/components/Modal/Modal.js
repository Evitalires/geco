// import * as React from 'react'
import React, { Component, Fragment } from 'react'

import Button from '../Button/Button'


import { Portal } from './Portal'

class Modal extends Component {
  state = {
    //modal structure
    area: this.props.area,
    header: this.props.header,
    body: this.props.body,
    footer: this.props.footer,
    className: this.props.className,
    //modal Status
    opened: this.props.opened,
    headerTitle: this.props.headerTitle,
    //modal Trigger
    trigger: this.props.trigger,
    triggerText: this.props.triggerText,
    triggerClass: this.triggerClass,
    triggerColorPrimary: this.triggerColorPrimary,
    triggerColorSecondary: this.triggerColorSecondary,
    //modal Closer
    closerText: this.props.closerText,
    closerClass: this.props.closerClass,
    //Styles modal
      // Header
      headerBackground: this.props.headerBackground,
      headerPadding: this.props.headerPadding,
      headerTextAlign: this.props.headerTextAlign,
      headerHeight: this.props.headerHeight,
      // Body
      bodyPadding: this.props.bodyPadding,
      // Footer
      footerAlignItems: this.props.footerAlignItems,
      footerJustifyContent: this.props.footerJustifyContent
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
      className,
      headerTitle,
      closerText,
      headerBackground,
      headerTextAlign,
      bodyPadding,
      headerPadding,
      headerHeight,
      footerAlignItems,
      footerJustifyContent,
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
              <div className={ 'modalContainer ' + className }>
                <div className="modalHeader">
                  <h1>
                    { headerTitle }
                  </h1>
                  <Button
                    text={ closerText }
                    justifySelf='right'
                    alignSelf='baseline'
                    padding='0 0 .5em 0'
                    handleClick={this.close}
                    className={this.state.closeButton || ''}
                  />
                  {
                    this.state.header
                  }
                </div>
                <div className='modalBody'>
                  {
                    this.props.children || this.state.body
                  }
                </div>
                <div className='modalFooter'>
                  {
                    this.state.footer
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
                  min-height: 2em;
                  padding: ${headerPadding || '.5em'};
                  background: ${headerBackground};
                  grid-template-columns: 1fr 2em;
                }
                .modalHeader h1 {
                  margin: 0;
                  display: grid;
                  font-size: 1.5em;
                  color: var(--gray);
                  font-weight: normal;
                  align-content: space-evenly;
                  height: ${ headerHeight || 'auto' };
                  text-align: ${ headerTextAlign || ' left ' };
                }
                .modalBody {
                  overflow: scroll;
                  padding: ${ bodyPadding || '0'}em;
                }
                .modalFooter {
                  display: grid;
                  align-items: ${footerAlignItems};
                  justify-content: ${footerJustifyContent}
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
                  background: ${ headerBackground || 'var(--bk-dark)'};
                  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
                }
                .modalAlert {
                  top: 20%;
                  left: 10%;
                  right: 10%;
                  bottom: 35%;
                  padding: 1em;
                  position: absolute;
                  background-color: var(--white);
                }
                .modalBottom {
                  bottom: 0;
                  left: 0;
                  right: 0;
                  padding: 1em;
                  position: absolute;
                  background-color: var(--white)
                }
              `}</style>
            </div>
          </Portal>
        )}
      </Fragment>
    )
  }
}

export default Modal
