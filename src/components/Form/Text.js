import React, { Component } from 'react'
import Field from '../Field/Field'

class Text extends Component {
  state = {
    error: false,
    label: this.props.label,
    text: this.props.text || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className,
  }
  handleClick = event => {
  }
  handleChange = event => {
    if(this.props.handleChange == undefined) {
      this.setState({text: event.target.value})
    }
    else {
      this.props.handleChange(event)
    }
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  render() {
    return (
      <Field
        {...this.state}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
      >
        {
          this.props.children
        }
      </Field>
    )
  }
}

export default Text
