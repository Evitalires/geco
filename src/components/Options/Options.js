import React, { Component } from 'react'
import Button from '../../components/Button/Button'

class Options extends Component {
  state = {
    className: this.props.className,
    typeButtons: this.props.typeButtons,
    message: this.props.message,
    messageDeny: this.props.messageDeny,
    messageDenyLabel: this.props.messageDenyLabel,
    messageConfirm: this.props.messageConfirm,
    messageConfirmLabel: this.props.messageConfirmLabel,
    classButtonDeny: this.props.classButtonDeny,
    classButtonConfirm: this.props.classButtonConfirm,
  }
  handleConfirm = () => {
    (this.props.handleConfirm) && this.props.handleConfirm()
  }
  handleDeny = () => {
    (this.props.handleDeny) && this.props.handleDeny()
  }
  render() {
    return (
      <section className={this.state.className || 'OptionsModal'}>
        <h1>{this.state.message}</h1>
        <article>
          <Button
            textLabel={this.state.messageConfirmLabel}
            textInput={this.state.messageConfirm}
            type={this.state.typeButtons}
            className={this.props.classButtonConfirm || 'buttonGray'}
            handleClick={this.handleConfirm}
          />
          <Button
            textLabel={this.state.messageDenyLabel}
            textInput={this.state.messageDeny}
            type={this.state.typeButtons}
            className={this.props.classButtonDeny || 'buttonDark'}
            handleClick={this.handleDeny}
          />
        </article>
        <style jsx>{`
          .OptionsModal {
            display: flex;
            padding-top: 24px;
            flex-direction: column;
          }
          .OptionsModal h1 {
            margin: 0px;
            color: #164461;
            font-size: 24px;
            text-align: center;
          }
          .OptionsModal article {
            display: flex;
            width: 100%;
            margin: 50px 0px;
            justify-content: space-around;
          }
        `}</style>
      </section>
    )
  }
}
export default Options
