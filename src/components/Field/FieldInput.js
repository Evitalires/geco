/*
  FieldInput muestra
  ________
  input   |  icon X || ok
  ________

  -------------------------

  label   |
  ________
  input   |  icon X || ok
  ________
  span    |
  ________
*/
import React, { Component, Fragment } from 'react'
/*
  Field muestra:
    label (oculto)
    input (visible)
    span (oculto)
*/
class Field extends Component {
  state = {
    error: '',
    label: this.props.label,
    text: this.props.text || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className,
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
    if(this.state.className.search('Focus') == -1) {
      this.setState({ className: this.state.className + ' Focus' });
    }

    (this.props.handleClick) && this.props.handleClick(event)
    this.handleFocus(event)
  }
  handleBlur = (event) => {
    //this.setState({formClass: ''})
    (this.props.handleBlur) && this.props.handleBlur(event)
  }
  handleChange = event => {
    (this.props.handleChange) && this.props.handleChange(event)
  }
  handleError = error => {
    console.log('Recibí algún error');
    if(this.state.className.search('Error') == -1 && error != false) {
      this.setState({
        className: this.state.className + ' Error'
      })
    }
    else if (error == false) {
      let className = this.state.className.replace(' Error', '')
      this.setState({
        className: className
      })
    }
  }
  handleFocus = event => {
    if(event.target == this.input) {
      event.persist()
      event.target.select()
    }
    else {
      this.input.focus()
      this.input.select()
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('recibí nuevas propiedades');
    this.setState({
      error: nextProps.error,
      text: nextProps.text,
    })
    this.handleError(nextProps.error)
  }
  render() {
    let children = this.props.children;
    return (
      <div
        className={this.state.className}
        onBlur={this.handleBlur}
        >
        <label
          htmlFor={this.state.id}
          onClick={this.handleClick}
          >
          {this.state.label}
        </label>
        <input
          ref={this.setRef}
          id={this.state.id}
          onClick={this.handleClick}
          value={this.state.text}
          placeholder={this.state.placeholder}
          onChange={this.handleChange}
        />
        <span className={this.state.spanClass}>
          {this.state.error}
        </span>
        {
          (this.state.className == 'Form')
          &&
          <div className="Icons">
            {
              (this.state.error != false)
            }
          </div>
        }
        {
          (this.state.className == 'Finder') &&
          <div className='Icons'>
            {
              this.props.children
            }
          </div>
        }
        <style jsx>{`
          {
            --bk-light: #48ACEC;
            --bk-dark: #164461;
            --gray: #788895;
            --white: #E0EDF3;
            --black: #182C39;
          }
          div {
            height: 30px;
            display: grid;
            transition: .5s;
            grid-column-gap: ${(children) ? 16 : 0}px;
            grid-template-areas:  "label Icons"
                                  "input Icons"
                                  "span  Icons";
            grid-template-rows: 0px 1fr 0px;
            grid-template-columns: 1fr 0px;
          }
          label {
            display: grid;
            opacity: 0;
            grid-area: label;
          }
          input {
            padding: 0;
            outline: none;
            border: none;
            display: grid;
            grid-area: input;
            font-size: 20px;
            color: var(--gray);
          }
          span {
            opacity: 0;
            display: grid;
            color: var(--gray);
            grid-area: span;
          }
          .Icons {
            height: 100%;
            opacity: 1;
            display: grid;
            grid-area: Icons;
            grid-auto-flow: column;
            grid-template-rows: 100%;
          }

          p.Focus input {
            border-bottom: 1px solid var(--bk-light);
          }
          /**
           * Styles type p
           */
          .Form {
            height: 60px;
            margin: 16px 0px;
            font-family: arial;
            align-items: center;
            grid-template-columns: 1fr ${(children) ? 30 : 0}px;
            grid-template-rows: 16px 1fr 16px;
            grid-template-areas:  " label Icons"
                                  " label Icons "
                                  " label Icons";
          }
          .Form label {
            opacity: 1;
            height: 20px;
            transition: .3s;
            display: grid;
            font-size: 20px;
            cursor: pointer;
            align-items: center;
            padding-left: 8px;
            padding-bottom: 4px;
            color: var(--gray);
            border-bottom: 1px solid var(--gray);
          }
          .Form input {
            display: none;
          }
          .Form span {
            grid-area: span;
          }
          .Form.Focus {
            transition: .3s;
            align-items: center;
            grid-template-rows: 16px 1fr 16px;
            grid-template-areas:  " label Icons"
                                  " input Icons "
                                  " span Icons";
          }
          .Form.Focus label {
            display: grid;
            height: 16px;
            border: none;
            padding: 0px;
            transition: .3s;
            font-size: 16px;
          }
          .Form.Focus input {
            height: auto;
            display: grid;
            transition: 1s;
            padding-left: 8px;
            color: var(--black);
            padding-bottom: 2px;
            border-bottom: 1px solid var(--bk-light);
          }
          .Form.Focus span {
            opacity: 1;
            height: 16px;
            display: grid;
          }
          .Form.Error {

          }
          .Form.Error label {
            color: red;
          }
          .Form.Error input {
            border-bottom: 1px solid red;
          }
          .Form.Error span {
            color: red;
          }
          .Form.Error input:focus {

          }

          /**
           * Finder
           */
          .Finder {
            height: 66px;
            padding: 0px 16px;
            background: var(--bk-dark);
            align-items: center;
            grid-template-rows: 16px 1fr 16px;
            grid-template-columns: 1fr ${(children) ? 30 : 0}px;
            grid-template-areas:  "label Icons"
                                  "input Icons"
                                  "span Icons";
          }
          .Finder input {
            color: #E0EDF3;
            height: 30px;
            font-size: 24px;
            min-width: 100%;
            align-self: center;
            padding-bottom: 4px;
            background: transparent;
            border-bottom: 1px solid var(--gray);
          }
          .Finder.Focus input:focus {
            border-bottom:  1px solid var(--bk-light);
          }

          /**
           * Styles for errors
           */
        `}</style>
      </div>
    )
  }
}

export default Field
