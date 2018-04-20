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
    text: this.props.text,
    place: this.props.place,
    input: this.props.input,
    form: this.props.form,
    div: this.props.div,
    error: false
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  handleChange = event => {
    this.setState({
      text: event.target.value
    })
    this.props.handleChange && this.props.handleChange(event)
  }
  handleBlur = event => {
    this.setState({text: ''})
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
