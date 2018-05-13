import React, { Component, Fragment } from 'react'
import FinderUI from './FinderUI'
/*
  Lo que hará este componente es:
  - Recibir información del input dada por el usuario
  - Si encuentra coincidencias, renderizará un componente Producto.
  - Si no encuentra coincidencias, lanzará error
  - Al enviar el producto enviado, este actualizará el estado de la factura con una nueva posición en el array de productos que se mostrarán el la pantalla
*/
class Finder extends Component {
  state = {
    action: this.props.action || '',
    seeker: this.props.seeker,
    inputPlaceHolder: this.props.inputPlaceHolder,
    inputName: this.props.name || 'finder',
    inputText: this.props.inputText,
    labelText: this.props.labelText,
    classArticle: this.props.classArticle,
    classForm: this.props.classForm,
    classInput: this.props.classInput,
    classLabel: this.props.classLabel,
    classMessage: this.props.classMessage,
    error: this.props.error
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick(event)
    event.target.focus()
  }
  handleChange = event => {
    this.setState({inputText: event.target.value})
    this.props.handleChange && this.props.handleChange(event)
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event)
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
      event.target.focus()
    }, 0)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.error,
      inputText: nextProps.inputText,
    })
  }
  render() {
    return (
      <Fragment>
        <FinderUI
          {...this.state}
          setRef={this.props.setRef}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleBlur={this.handleBlur}
        >
          {this.props.children}
        </FinderUI>
      </Fragment>
    )
  }
}

export default Finder
