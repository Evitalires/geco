import React, { Component } from 'react'
import Finder from '../../../Finder/Finder'

class Id extends Component {
  state = {
    error: false,
    inputText: "ID",
    inputName: this.props.type,
    classArticle: 'productArticle',
    classForm: 'productForm',
    classInput: 'productInput',
    classLabel: 'productLabel',
    classMessage: 'productMessage'
  }
  setRef = element => {
    this.input = element
  }
  handleClick =  event => {
    this.setState({
      inputText: this.props.value
    })
    event.persist()
    this.handleFocus(event)
  }
  handleBlur = event => {
    this.setState({
      inputText: 'ID'
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
      inputText: Id.value,
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
