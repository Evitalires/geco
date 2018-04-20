import React, { Component } from 'react'
import IdUI from './IdUI'

class Id extends Component {
  state = {
    value: "ID",
    error: false,
    name: this.props.name
  }
  setRef = element => {
    this.input = element
  }
  handleClick =  async event => {
    event.persist()
    // Setting styles
    const Id = this.input
    const label = Id.previousElementSibling
    const form = Id.parentElement
    const error = Id.nextElementSibling

    if(Id.className.search('moveDown') > 0){
      Id.className = Id.className.replace(' moveDown', ' moveUp')
      label.className = label.className.replace(' unMoveLabel', ' moveLabel')
      form.className = form.className.replace(' noBorderForm', ' borderForm')
    }
    if(Id.className.search('moveUp') < 0) {
      Id.className += ' moveUp'
      label.className += ' moveLabel'
      form.className += ' noBorderForm'
    }
    if (Id.value == 'ID') {
      Id.value = this.props.value
    }
    //
    this.setState({
      value: Id.value
    })
    this.handleFocus(event)
  }
  handleBlur = event => {
    const Id = this.input
    const label = Id.previousElementSibling
    const form = Id.parentElement
    const error = Id.nextElementSibling

    if(Id.className.search('moveDown') < 0){
        Id.value = Id.value.replace(/([^0-9])/gi, '')
        Id.className = Id.className.replace(' moveUp', ' moveDown')
        label.className = label.className.replace(' moveLabel', ' unMoveLabel')
        form.className = form.className.replace(' noBorderForm', ' borderForm')
        error.className = error.className.replace(' moveError', '')
      }
    this.setState({
      value: Id.value
    })
  }
  handleChange = event => {
    let Id = this.input
    let error = Id.nextElementSibling
    if(/([^0-9])/gi.test(Id.value)) {
      error.className += (error.className.search(' moveError') < 0) ? ' moveError' : ''
      error.innerText = 'Aquí van solo numeros'
    }
    if(!/([^0-9])/gi.test(Id.value)) {
      error.innerText = ''
      error.className = error.className.replace(' moveError', '')
    }
    if(/([^0-9])/gi.test(Id.value)) {
      setTimeout(()=>{ Id.value = Id.value.replace(/([^0-9])/gi, '')}, 3000)
    }
    this.setState({
      value: Id.value,
      error: error.innerText
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
        <IdUI
          {...this.state}
          setRef={this.setRef}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleBlur={this.handleBlur}
          handleKeyUp={this.handleKeyUp}
          handleSubmit={this.handleSubmit}
          >
        </IdUI>
    )
  }
}

export default Id
