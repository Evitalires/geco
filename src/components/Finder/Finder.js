import React, { Component, Fragment } from 'react'
import FinderUI from './FinderUI'

class Finder extends Component {
  state = {
    error: '',
    id: this.props.id || this.props.inputText,
    formClass: this.props.formClass,
    inputText: this.props.inputText,
    inputType: this.props.inputType,
    inputPlaceholder: this.props.inputPlaceholder,
    labelText: this.props.labelText,
    formAction: '',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = (event) => {
    this.setState({ formClass: this.state.formClass + ' Focus' });

    (this.props.handleClick) && this.props.handleClick(event)
    this.handleFocus(event)
  }
  handleBlur = (event) => {
    console.log('Hubo un blur');
    //this.setState({formClass: ''})
    (this.props.handleBlur) && this.props.handleBlur(event)
  }
  handleChangeInput = event => {
    console.log();
    (this.props.handleChange) && this.props.handleChange(event.target.value)
    //setTimeout( () => this.handleUpdate(), 0)
  }
  handleError = event => {
    if(this.state.error.length > 1) {
      this.setState({
        formClass: this.state.formClass + ' formError'
      })
    }
  }
  handleUpdate = (event) => {
    console.log(this.state.inputText);
    (this.props.handleUpdate) && this.props.handleUpdate(this.state.inputText)
  }
  handleFocus = event => {
    console.log('debería funcionar');
    if(event.target == this.input) {
      event.persist()
      event.target.select()
      // setTimeout(() => {
      //    event.target.selectionStart = event.target.value.length;
      //    event.target.selectionEnd = event.target.value.length;
      //    event.target.focus()
      //  }, 200)
    }
    else {
      this.input.focus()
      this.input.select()
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    (this.props.handleSubmit) && this.props.handleSubmit(event)
  }
  componentDidMount() {
    console.log(this.props.children);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.error,
      inputText: nextProps.inputText,
    })
  }
  render() {
    let children = this.props.children;
    return (
      <form
        action={this.state.formAction}
        autoComplete='off'
        className={this.state.formClass}
        onBlur={this.handleBlur}
        onSubmit={this.handleSubmit}
        >
        <label
          htmlFor={this.state.id}
          onClick={this.handleClick}
          className={this.state.labelClass}
          >
          {this.state.labelText}
        </label>
        <input
          ref={this.setRef}
          id={this.state.id}
          onClick={this.handleClick}
          type={this.state.inputType}
          value={this.state.inputText}
          placeholder={this.state.inputPlaceholder}
          onChange={this.handleChangeInput}
          className={this.state.inputClass}
        />
        <span className={this.state.spanClass}>
          {this.state.error}
        </span>
        <div className='Icons'>
          {
            this.props.children
          }
        </div>
        <style jsx>{`
          {
            --bk-light: #48ACEC;
            --bk-dark: #164461;
            --gray: #788895;
            --white: #E0EDF3;
            --black: #182C39;
          }
          form {
            height: 30px;
            display: grid;
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
            grid-area: span;
          }
          .Icons {
            height: 100%;
            display: grid;
            grid-area: Icons;
            grid-auto-flow: column;
            grid-template-rows: 100%;
          }

          form.Focus input {
            border-bottom: 1px solid var(--bk-light);
          }
          /**
           * Styles type form
           */
          .Form {
            height: 60px;
            margin: 16px 0px;
            font-family: arial;
            align-items: center;
            grid-template-columns: 1fr ${(children) ? 100 : 0}px;
            grid-template-rows: 16px 1fr 16px;
            grid-template-areas:  " label Icons"
                                  " label Icons "
                                  " label Icons";
          }
          .Form label {
            opacity: 1;
            height: 20px;
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
          .Finder {
            height: 66px;
            padding: 0px 16px;
            background: var(--bk-dark);
            align-items: center;
            grid-template-rows: 16px 1fr 16px;
            grid-template-columns: 1fr ${(children) ? 100 : 0}px;
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
          .formError {
            transition: 0s;
          }
          .formError label {
            color: red;
            transition: 0s;
          }
          .formError input {
            transition: 0s;
            border-bottom: 1px solid red;
          }
          .formError span {
            color: red;
            transition: 0s;
          }
        `}</style>
      </form>
    )
  }
}

export default Finder
