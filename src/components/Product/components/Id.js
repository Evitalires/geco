import React, { Component } from 'react'
import { HandleError } from './utils/utils'
import Finder from '../.././Finder/Finder'

class Id extends Component {
  state = {
    error: false,
    value: this.props.value,
    inputText: this.props.inputText,
    inputName: this.props.type,
    inputPlaceHolder: this.props.inputPlaceHolder,
    labelText: 'Número de identificación',
  }
  setRef = element => {
    this.input = element
  }
  handleClick =  event => {
    event.persist()
    if(this.props.idShort) {
      this.setState({inputText: this.props.value})
    }
  }
  handleBlur = event => {
    if(this.props.idShort) {
      this.setState({
        inputText: 'ID',
        value: event.target.value
      })
    }
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleChange = event => {
    if(event.target.value.search(/([^0-9])/) > -1) {
      this.setState({ error: 'Solo se permiten números' })
      event.persist()
      HandleError(event, this)
    }
    let text = event.target.value.replace(/([^0-9])/gi, '')
    this.setState({
      inputText: text,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  handleFocus = event => {
    event.persist()
    event.target.select()
    setTimeout(() => {
      event.target.selectionStart = event.target.value.length;
      event.target.selectionEnd = event.target.value.length;
    }, 1000)
  }
  render(){
    return(
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

export default Id
