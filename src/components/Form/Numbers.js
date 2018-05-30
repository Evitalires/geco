import React, { Component } from 'react'
import Field from '../Field/Field'

class Numbers extends Component {
  state = {
    error: false,
    label: this.props.label,
    text: this.props.text || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className,
  }
  replace = value => {
    return value = Number(value.replace(/([^0-9])/, ""))
  }
  search = value => {
    if(value.search(/([^0-9])/) > -1) {
      this.setState({ error: 'Solo se permiten números' })
    }
  }
  handleClick = event => {
  }
  handleChange = event => {
    if(this.props.handleChange == undefined) {
      this.search(event.target.value)
      let value = this.replace(event.target.value)
      this.setState({
        text: value
      })
      setTimeout(() => {
        this.setState({error: false})
      }, 5000)
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

export default Numbers
