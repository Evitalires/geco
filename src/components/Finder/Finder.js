import React, { Component } from 'react'
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
    seeker: this.props.seeker,
    inputPlace: this.props.inputPlace,
    inputText: this.props.inputText,
    labelText: this.props.labelText,
    classDiv: this.props.classDiv,
    classForm: this.props.classForm,
    classInput: this.props.classInput,
    classLabel: this.props.classLabel,
    error: false
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  handleChange = event => {
    this.setState({inputText: event.target.value})
    this.props.handleChange && this.props.handleChange(event)
  }
  handleBlur = event => {
    (this.props.handleBlur)
    ? console.log('No voy a limpiar')
    : this.setState({inputText: ''})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      inputText: nextProps.inputText
    })
  }
  render() {
    return (
      <div>
        <FinderUI
          {...this.state}
          setRef={this.props.setRef}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleBlur={this.handleBlur}
        >
          {this.props.children}
        </FinderUI>
      </div>
    )
  }
}

export default Finder
