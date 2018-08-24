import React, { Component, Fragment } from 'react'
import Check from '../Icons/check.js'
import Cross from '../Icons/cross.js'



class FieldInput extends Component {
  state = {
    error: this.props.error || false,
    validated: false,
    label: this.props.label,
    value: this.props.value || '',
    id: this.props.id || this.props.label,
    placeholder: this.props.placeholder,
    className: this.props.className || '',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
    if(this.state.className.search('Focus') == -1) {
      this.setState({ className: this.state.className + ' Focus' });
    }
    (this.props.handleClick) && this.props.handleClick(event);
    this.handleFocus(event)
  }
  handleBlur = (event) => {
    (this.props.handleBlur) && this.props.handleBlur(event)
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    (this.props.handleChange) && this.props.handleChange(event)
  }
  handleError = error => {

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

    this.setState({
      error: nextProps.error,
      value: nextProps.value,
    });
    this.handleError(nextProps.error)
  }
  render() {
    let children = this.props.children;
    return (
      <article
        onBlur={this.handleBlur}
        className={this.state.className}
        >
        <label
          htmlFor={this.state.value || this.state.label}
          onClick={this.handleClick}
          >
          {this.state.label}
        </label>
        <input
          type="text"
          ref={this.setRef}
          value={this.state.value}
          id={this.state.value || this.state.label}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
        <p>{this.state.error}</p>
        <div className='Icon'>
          {
            (this.state.validated == true) &&
              <Check
                size='24'
                color='var(--bk-light)'
              />
          }
          {
            (this.state.error != false) &&
              <Cross
                size='1em'
                color='red'
              />
          }
        </div>
        <style jsx>{`
          article {
            display: grid;
            grid-template-columns: 1fr 1em;
            grid-template-rows: 3.7em;
            grid-template-areas: "label Icon";
          }

          label {
            width: 100%;
            height: 1.2em;
            display: grid;
            font-size: 1.2em;
            cursor: pointer;
            align-self: center;
            color: var(--gray);
            border-bottom: 1px solid var(--gray)
          }
          input {
            height: 1.2em;
            border: none;
            padding: 0em;
            outline: none;
            display: none;
            min-width: 100%;
            font-size: 1.2em;
            grid-area: input;
            align-self: center;
            color: var(--bk-black);
            background: transparent;
            border-bottom: 1px solid var(--gray);
          }
          p {
            margin: 0;
            opacity: 1;
            display: none;
            font-size: 1em;
          }
          .Icon {
            display: grid;
            grid-area: Icon
          }
          article.Focus {
            transition: .3s;
            /* grid-gap: .1em .5em; */
            grid-template-columns: 1fr ;
            grid-template-rows: 1em 1.7em 1em;
            grid-template-areas:  "label Icon"
                                  "input Icon"
                                  "p     Icon";
          }
          article.Focus label {
            font-size: 1em;
            transition: .3s;
            border-bottom: none;
          }
          article.Focus input {
            display: grid;
            transition: .5s;
            padding-left: .4em;
            color: var(--black);
            min-width: calc(100% - .4em);
          }
          article.Focus input:focus {
            border-bottom: 1px solid var(--bk-light);
          }
          article.Focus .Icon {
            display: grid;
          }
          article.Error {
            transition: .3s;
            grid-gap: .1em .5em;
            grid-template-columns: 1fr 1.7em;
            grid-template-areas:  "label Icon"
                                  "input Icon"
                                  "p     Icon"
          }
          article.Error p {
            opacity: 1;
            display: grid;
            font-size: 1em;
            transition: .5s;
          }
          article.Error label,
          article.Error p {
            color: red;
          }
          article.Error input,
          article.Error input:focus {
            border-bottom: 1px solid red;
          }


          article.Validated {
            grid-gap: .1em .5em;
            grid-template-columns: 1fr 1.7em;
            grid-template-rows: 1.2em;
            grid-template-areas: "input Icon";
          }
          article.Validated label {
            display: none;
          }
          article.Validated p {
            display: none;
          }
          article.Validated input {
            display: grid;
            border-bottom: 1px solid var(--bk-light)
          }

          article.ValidatedError {
            grid-gap: .1em .5em;
            grid-template-columns: 1fr 1.7em;
            grid-template-rows: 1.2em 1em;
            grid-template-areas: "input Icon"
                                 "p     Icon"
            ;
          }
          article.ValidatedError label {
            display: none;
          }
          article.ValidatedError p {
            display: grid;
            color: red;
          }
          article.ValidatedError input {
            display: grid;
            border-bottom: 1px solid red;
          }

        `}</style>
      </article>
    )
  }
}


export default FieldInput
