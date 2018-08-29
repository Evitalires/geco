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
    context: this.props.context || '',
    // styles
    height: this.props.height
  }
  icon = () => {
    let {
      error,
      validate
    } = this.state

    if(validate == true || error != '') {
      return true
    }
    else {
      return false
    }
  }
  setRef = element => {
    this.input = element
  }
  focus = () => {
    this.input.focus()
    this.input.select()
  }
  active = context => {
    this.setState({
      context: context || 'active'
    });
    this.focus()
  }
  unActive = context => {
    this.setState({
      context: context || 'unActive'
    });
  }
  error = context => {
    this.setState({
      context: context
    })
  }
  click = event => {
    this.props.active && this.active();
    this.state.error != '' && this.error();
    this.props.onClick && this.props.onClick();
  }
  change = event => {
    let text = event.target.value
    this.setState({
      value: text
    });
    this.props.onChange && this.props.onChange()
  }
  blur = event => {
    this.props.unActive && this.unActive();
    this.state.error != '' && this.error();
    this.props.onBlur && this.props.onBlur();
  }
  componentWillMount  = () => {
    this.state.error != '' && this.error('error')
  }
  componentWillReceiveProps = (props) => {
    console.log('recibí nuevas propiedades');
    if(props.error != '') {
      this.error('error')
    }
    else {
      this.error('')
    }
  }
  render() {
    let {
      label,
      value,
      error,
      view,
      validate,
      className,
      context,
      placeholder,
      //Styles
      height
    } = this.state
    let id = Math.random()
    return(
      <article
        onClick={this.click}
        onBlur={this.blur}
        className={`${className} ${context} ${validate && 'validate'}`}>
        <label htmlFor="">{label}</label>
        <input
          type="text"
          value={value}
          ref={this.setRef}
          onChange={this.change}
        />
        <p>{error}</p>
        {
          (this.icon) &&
          <div className='Icon'>
            {
              (validate == true) &&
                <Check
                  size='1em'
                  color='var(--bk-light)'
                />
            }
            {
              (error != '') &&
                <Cross
                  size='1em'
                  color='red'
                />
            }
          </div>
        }
        <style jsx>{`
          article {
            display: grid;
            grid-gap: .2em;
            grid-auto-flow: column;
            grid-template-columns: ${this.icon ? "1fr 4em" : "100%" };
            --areasDefaultIcon: "Label Icon"
                                "Input Icon"
                                "Parrafo Icon";
            --areasDefault: "Label"
                            "Input"
                            "Parrafo";
            --areasRowDefault: .8em 1.5em .8em;
            --areasChange:  "Input"
                            "Label"
                            "Parrafo";
            --areasChange:  "Input Icon"
                            "Label Icon"
                            "Parrafo Icon";
          }
          label {
            font-size: .9em;
            grid-area: Label;
            transition: .3s;
            color: var(--light-gray);
            border-bottom: 1px solid transparent;
          }
          input {
            border: none;
            outline: none;
            font-size: 1em;
            grid-area: Input;
            transition: .3s;
            padding-left: .5em;
            padding-bottom: .5em;
            color: var(--bk-dark);
            background: transparent;
            border-bottom: 1px solid transparent;
          }
          p {
            margin: 0;
            display: none;
            grid-area: Parrafo;
          }
          .Icon {
            display: grid;
            grid-area: Icon;
          }
          /* Styles Default */
          .default {
            grid-template-rows: var(--areasRowDefault);
            grid-template-areas: ${this.icon ? 'var(--areasDefaultIcon)' : 'var(-areasDefault)' };
          }
          .default input {
            transition: .5s;
            border-bottom: 1px solid ${
              value.length == 0 ? 'var(--gray-light)' : 'transparent'
            };
          }
          .default input:focus {
            border-bottom: 1px solid var(--bk-light);
          }
          .default.unActive input {
            border-bottom: 1px solid ${value.length == 0 ? 'var(--light-gray)' :   'transparent'};
          }
          .default.validate input {
            border-bottom: 1px solid var(--bk-light);
          }
          /* Styles Change */
          .change {
            grid-template-rows: var(--areasRowDefault);
            grid-template-areas: var(--areasChange);
          }
          .change input {
            padding: 0;
            opacity: 0;
            font-size: .8em;
            border-bottom: 1px solid transparent;
          }
          .change label {
            font-size: 1em;
            color: var(--bk-dark);
          }
          .change.active {
            grid-template-areas: var(--areasDefault);
          }
          .change.active label,
          .change.unActive label {
            font-size: .8em;
            color: var(--light-gray);
          }
          .change.active input,
          .change.unActive input {
            opacity: 1;
            font-size: 1em;
            padding-left: .5em;
            padding-bottom: .5em;
            border-bottom: 1px solid var(--light-gray);
          }
          .change.active input:focus,
          .change.unActive input:focus {
            border-bottom: 1px solid var(--bk-light);
          }
          .change.unActive {
            grid-template-areas: var(--areasDefault);
          }
          /* Styles product */
          .product {
            grid-template-rows: var(--areasRowDefault);
            grid-template-areas: var(--areasDefault);
          }
          .product input {
            padding-left: 0;
          }
          .product label {
            opacity: 0;
          }
          .product.active input {
            padding-left: .5em;
            border-bottom: 1px solid var(--bk-light);
          }
          .product.active label {
            opacity: 1;
          }

          /* Styles Error */
          .error p {
            color: red;
            font-size: .8em;
            display: block;
          }
          .error label {
            color: red;
          }
          .error input,
          .error input:focus {
            border-bottom: 1px solid red;
          }

        `}</style>
      </article>
    )
  }
}

export default Input
