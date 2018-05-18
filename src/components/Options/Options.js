import React, { Component } from 'react'
import Button from '../../components/Button/Button'

class Options extends Component {
  state = {
    message: this.props.message,
    messageDeny: this.props.messageDeny,
    messageDenyLabel: this.props.messageDenyLabel,
    messageConfirm: this.props.messageConfirm,
    messageConfirmLabel: this.props.messageConfirmLabel
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
            type='button'
            className='buttonGray'
            textLabel={this.state.messageConfirmLabel}
            textInput={this.state.messageConfirm}
            handleClick={this.handleConfirm}
          />
          <Button
            type='button'
            className='buttonDark'
            textLabel={this.state.messageDenyLabel}
            textInput={this.state.messageDeny}
            handleClick={this.handleDeny}
          />
        </article>
        <style jsx>{`
          section {
            padding: 8px 0px;
            margin: 24px 0px;
          }
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
