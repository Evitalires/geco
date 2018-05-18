import React, { Component } from 'react'
import FieldCheck from '.././FieldCheck/FieldCheck'

class OptionsField extends Component {
  state = {
    selected: false,
    title: this.props.title,
    options: this.props.options
  }
  handleConfirm = text => {
    this.setState({
      answer: true,
      selected: text
    })
    this.handleAnswer(true)
  }
  handleDeny = text => {
    this.setState({
      answer: false,
      selected: text
    })
    this.handleAnswer(false)
  }
  handleAnswer = value => {
    (this.props.handleAnswer) && this.props.handleAnswer(value)
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <article>
        <h1>{this.state.title}</h1>
          <FieldCheck
            text={'Sí'}
            checked={false}
            selected={this.state.selected}
            handleClick={this.handleConfirm}
          />
          <FieldCheck
            text={'No'}
            checked={false}
            selected={this.state.selected}
            handleClick={this.handleDeny}
          />
        <style jsx>{`
          article {
            margin: 8px 0px;
          }
          h1 {
            margin: 0px;
            color: #788895;
            font-size: 16px;
            font-weight: 100;
          }
        `}</style>
      </article>
    )
  }
}
export default OptionsField
