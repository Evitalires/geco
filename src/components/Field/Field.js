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
    this.handleFocus(event);
    (this.props.handleClick) && this.props.handleClick(event);
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
      <article className={this.state.className}>
        <label
          onClick={this.handleClick}
          >
            {this.state.label}
        </label>
        <input
          ref={this.setRef}
          value={this.state.value}
          placeholder={this.state.placeholder}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <p>{this.state.error || 'Hubo un error'}</p>
        <style jsx>{`
          article {
            display: grid;
            grid-auto-rows: 1em;
            grid-template-areas: "input";
          }
          label {
            width: 100%;
            font-size: 0em;
            display: none;
            color: var(--gray);
          }
          input {
            height: 1em;
            border: none;
            padding: 0em;
            outline: none;
            min-width: 100%;
            font-size: 1.2em;
            grid-area: input;
            align-self: center;
            color: var(--gray);
            background: transparent;
            border-bottom: 1px solid transparent;
          }
          p {
            margin: 0;
            opacity: 0;
            display: none;
            font-size: 1em;
          }
          article.Focus {
            height: 100%;
            transition: .5s;
            grid-gap: .2em;
            grid-template-rows: 1em 1.5em 1em;
            grid-template-areas:  "label"
                                  "input"
                                  "p";
          }
          article.Focus label {
            display: grid;
            font-size: 1em;
            transition: .3s;
          }
          article.Focus input {
            height: 100%;
            transition: .3s;
            padding-top: 0em;
            padding-left: .4em;
            color: var(--black);
            min-width: calc(100% - .4em);
            border-bottom: 1px solid var(--gray)
          }
          article.Focus input:focus {
            border-bottom: 1px solid var(--bk-light)
          }
          article.Error {
            transition: .3s;
            grid-template-areas:  "label"
                                  "input"
                                  "p"
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

        `}</style>
      </article>
    )
  }
}

export default Field
