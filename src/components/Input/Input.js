import React, { Component } from 'react'
import Check from '../Icons/check.js'
import Cross from '../Icons/cross.js'

/**
  <Input
    value={valor de input}
    placeholder={placeholder para input}
    label={texto del label}
    icon={muestra al icono cuando tenga error o esté validado }
    className={
      "active"   => Se refiere al orden label, input, p,
      "unActive" => Se refiere al orden input, label, p,
      "default" => Se refiere al orden input
    }
    validate = {
      "true" => Se refiere a los contornos con var(--bk-light) + icono
    }
    error={
      content: muestra el error y sobreescribe el contexto
      ||
      null
    }
    onClick={función para click}
    onChange={función que se activa con cada cambio}
    onBlur={Función cuando se pierde el foco: state{"active", "unActive"}, function}
  >
  </Input>
**/

class Input extends Component {
  state = {
    label: this.props.label,
    value: this.props.value,
    placeholder: this.props.placeholder,
    error: this.props.error || '',
    icon: this.props.icon || false,
    className: this.props.className || 'default',
    validate: this.props.validate,
    // styles
    height: this.props.height
  }
  active = () => {
    this.setState({ className: (this.props.className || 'default') + ' active' });
  }
  unActive = () => {
    this.setState({ className: (this.props.className || 'default') + ' unActive' });
  }
  error = () => {
    this.setState({ className: (this.props.className || 'default') + ' error' })
  }
  click = event => {
    this.props.active && this.active();
    this.state.error != '' && this.error();
    this.props.onClick && this.props.onClick();
  }
  change = event => {
    this.setState({
      value: event.target.value
    });
    this.props.onChange && this.props.onChange()
  }
  blur = event => {
    this.props.unActive && this.unActive();
    this.state.error != '' && this.error();
    this.props.onBlur && this.props.onBlur()
  }
  componentWillMount  = () => {
    console.log('Ya me monté');
    this.state.error != '' && this.error()
  }
  componentWillReceiveProps = () => {
    console.log('recibí nuevas propiedades');
  }
  render() {
    let {
      label,
      value,
      error,
      view,
      icon,
      validate,
      className,
      placeholder,
      //Styles
      height
    } = this.state
    return(
      <article
        className={className}
        onClick={this.click}
        onBlur={this.blur}
        >
        <label
          htmlFor={value}>
          {label}
        </label>
        <input
          id={value}
          value={value}
          placeholder={placeholder}
          onChange={this.change}
        />
        <p>{error}</p>
        <div className='Icon'>
          {
            (this.state.validated == true) &&
              <Check
                size='.8em'
                color='var(--bk-light)'
              />
          }
          {
            (this.state.error != false) &&
              <Cross
                size='.8em'
                color='red'
              />
          }
        </div>
        <style jsx>{`
          {
            --rowsDef: .7em 1.4em .8em;
            --areasUndef:  "Input Icon"
                            "Label Icon"
                            "Error Icon";
            --areasDef:     "Label Icon"
                            "Input Icon"
                            "Error Icon";
          }
          /* Default styles */
          article {
            display: grid;
            grid-auto-flow: row;
            align-items: center;
            grid-template-columns:${ validate || error ? '1fr 1em' : '1fr'};
            grid-template-rows: var(--rowsDef);
            grid-template-areas:  var(--areasUndef);
          }
          label {
            height: auto;
            display: none;
            grid-area: Label;
          }
          input {
            outline: none;
            height: 1.5em;
            grid-row-start: 2;
            grid-area: Input;
          }
          p {
            margin: 0;
            height: 1em;
            grid-area: Error;
            display: ${ error != '' ? 'block' : 'none'};
            opacity: ${ error != '' ? '1' : '0'};
          }
          .Icon {
            grid-area: Icon;
            display: ${ validate || error ? 'block' : 'none'}
          }
          /* Context  default */
          .default input {
            display: none;
          }
          .default p,
          .default label {
            display: block;
          }
          .default.active {
            grid-template-rows: var(--rowsDef);
            grid-template-areas: var(--areasDef)
          }
          .default.active input {
            display: block
          }
          .default.unActive {
            grid-template-rows: repeat(3, 1em);
            grid-template-areas:  "Input Icon"
                                  "Label Icon"
                                  "Error Icon"
          }
          .default.error {
            grid-template-rows: var(--rowsDef);
            grid-template-areas: var(--areasDef);
          }
          .default.error p {
            color: red;
          }
          /* Class product */
          .Product {
          }
          .Product.active {
            grid-template-rows: var(--rowsDef);
            grid-template-areas: var(--areasDef);
          }
          .Product.active label {
            display: block;
          }
          .Produc.active p {
            display: block;
          }
          .Product.error {
            grid-template-rows: var(--rowsDef);
            grid-template-areas: var(--areasDef);
          }
          .Product.error input {
            border: 1px solid transparent;
            border-bottom: 1px solid red;
          }
          .Product.error p {
            color: red;
          }
          /* Class Field */
          .Field {
            grid-template-rows: 3em;
            grid-template-areas:  "Input";
          }
        `}</style>
      </article>
    )
  }
}

export default Input
