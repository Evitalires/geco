import React, { Component } from 'react'
import { HandleError } from './utils/utils'
import Finder from '../.././Finder/Finder'

class Quantity extends Component {
  state = {
    error: false,
    inputText: this.props.value,
    inputName: this.props.type,
    labelText: 'Cantidad mínima de venta'
  }
  handleClick = event => {
  }
  handleChange = event => {
    (this.props.handleChange) && this.props.handleChange(event.target.value, "Quantity")
  }
  handleBlur = event => {
    this.handleChange(event)
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  componentWillReceiveProps(nextProps){
    this.setState({inputText: nextProps.value})
  }
  render() {
    return (
      <Finder
        {...this.state}
        setRef={this.setRef}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default Quantity
