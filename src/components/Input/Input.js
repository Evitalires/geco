import React, { Component } from 'react'
import Check from '../Icons/check.js'
import Cross from '../Icons/cross.js'

/**
Input
  <Input
    label={input.label}
    value={input.value}
    className={input.className}
    placeholder={input.placeholder}
    active={input.active}
    unActive={input.unActive}
    validate={input.validate}
    erro=={input.validate}
    onChange=={this.changeInput}
  />
Input Change

**/

class Input extends Component {
  state = {
    label: this.props.label,
    value: this.props.value,
    placeholder: this.props.placeholder,
    error: this.props.error || '',
    className: this.props.className || 'default',
    validate: this.props.validate,
    context: this.props.context || '',
  }
  icon = () => {
    let {
      error,
      validate
    } = this.state
    console.log('función icon');
    if(validate == true || error != '') {
      console.log('Props validate true');
      return true
    }
    else {
      console.log('Props validate false');
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
  }
  unActive = context => {
    this.setState({
      context: context || 'unActive'
    });
  }
  error = text => {
    this.setState({
      error: text
    })
  }
  click = event => {
    this.props.active && this.active();
    this.props.focus && this.focus()
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
    this.props.onBlur && this.props.onBlur();
  }
  componentWillReceiveProps = nextProps => {
    this.setState({
      label: nextProps.label,
      value: nextProps.value,
      placeholder: nextProps.placeholder,
      error: nextProps.error || '',
      className: nextProps.className || 'default',
      validate: nextProps.validate,
      context: nextProps.context || '',
    })
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
    } = this.state
    let id = Math.random()
    return(
      <article
        onClick={this.click}
        onBlur={this.blur}
        className={
          `${className} ` +
          `${context} ` +
          `${validate ? 'validate ' : ''} ` +
          `${error != '' ? ' error' : '' } `
        }
          >
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
            grid-template-columns: ${this.icon ? "var(--twoCol)" : "var(oneCol)" };
            --twoCol: 1fr 2em;
            --oneCol: 100%;
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

            --areasChangeIcon:  "Input Icon"
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
            grid-template-columns: var(--oneCol);
            grid-template-areas: ${this.icon ? 'var(--areasDefaultIcon)' : 'var(-areasDefault)' };
          }
          .default input {
            transition: .5s;
            border-bottom: 1px solid var(--light-gray);
          }
          .default input:focus {
            border-bottom: 1px solid var(--bk-light);
          }
          .default.unActive input {
            border-bottom: 1px solid ${value.length == 0 ? 'var(--light-gray)' :   'transparent'};
          }
          .default.validate {
            grid-template-columns: var(--twoCol);
          }
          .default.validate input {
            border-bottom: 1px solid var(--bk-light);
          }
          /* Styles Change */
          .change {
            grid-template-columns: var(--oneCol);
            grid-template-rows: var(--areasRowDefault);
            grid-template-areas: ${this.icon ? 'var(--areasChangeIcon)' : 'var(-areasChange)' };;
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
            grid-template-columns: ${this.icon ? 'var(--twoCol)' : 'var(--oneCol)' };
            grid-template-areas: ${this.icon ?  'var(--areasDefaultIcon)' : 'var(--areasDefault)'};
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
            grid-template-areas: ${this.icon ? 'var(--areasDefaultIcon)' : 'var(-areasDefault)' };
          }
          .change.validate.active,
          .change.validate.unActive {
            grid-template-columns: var(--twoCol);
            grid-template-areas: ${this.icon ? 'var(--areasDefaultIcon)' : 'var(-areasDefault)' };
          }
          .change.validate.unActive {

          }
          /* Styles product */
          .product {
            grid-template-columns: ${this.icon ? 'var(--twoCol)' : 'var(--oneCol)' };
            grid-template-rows: var(--areasRowDefault);
            grid-template-areas: ${this.icon ? 'var(--areasDefaultIcon)' : 'var(-areasDefault)' };;
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
          .error {
            grid-template-columns: var(--twoCol);
          }
          .error p {
            color: red;
            font-size: .8em;
            display: block;
          }
          .error label {
            color: red !important;
          }
          .error input,
          .error input:focus {
            border-bottom: 1px solid red !important;
          }

        `}</style>
      </article>
    )
  }
}

export default Input
