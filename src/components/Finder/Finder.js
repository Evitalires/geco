import React, { Component } from 'react'
import Field from '../Field/Field'
import Search from '../Icons/search'

class Finder extends Component {
  state = {
    error: '',
    type: 'search',
    type: this.props.type,
    text: this.props.text || '',
    placeholder: this.props.placeholder || '',
    className: this.props.className || '',
  }
  handleClick = event => {
    if(this.state.className.search('Focus') == -1) {
      this.setState({ className: this.state.className + ' Focus' });
    }
    (this.props.handleClick) && this.props.handleClick(event)
  }
  handleChange = event => {
    console.log('Recibí un cambio');
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    });
  }
  handleBlur = event => {
    let className = this.state.className.replace('Focus', '')
    this.setState({ className: ''});

    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleSubmit = (event) => {
    console.log('Debería hacer una petición');
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
  componentWillReceiveProps(nextProps) {
    if(nextProps.error != undefined) {
      this.setState({
        error: nextProps.error,
        text: nextProps.text,
      });
      this.handleError(nextProps.error)
    }
  }
  render() {
    return (
      <section className={this.state.className}>
        <input
          ref={this.setRef}
          value={this.state.text}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          placeholder={this.state.placeholder}
        />
          <Search
            size={30}
            color= {
                    (this.state.className.search('Focus') > -1)
                    ? 'var(--white)' : 'var(--gray)'
                   }
            handleClick={this.handleSubmit}
            className='Icon'
          />
        <p>
          {this.state.error}
        </p>
        {
          (this.props.children != undefined)
          &&
          <article className='Content'>
            {
              this.props.children
            }
          </article>
        }
        <style jsx>{`
          section {
            padding: 16px 24px;
            width: calc(100% - 48px);
            background: var(--bk-dark);
            display: grid;
            grid-gap: 8px 8px;
            grid-template-columns: 1fr 30px;
            grid-template-rows: 34px auto;
            grid-template-areas:  "input   Icon"
                                  "Content Content";
          }
          input {
            height: 34px;
            border: none;
            padding: 0px;
            outline: none;
            font-size: 24px;
            min-width: 100%;
            grid-area: input;
            align-self: center;
            color: var(--white);
            padding-bottom: 4px;
            background: transparent;
            border-bottom: 1px solid var(--gray);
          }
          input:focus {
            border-bottom: 1px solid var(--bk-light);
          }
          .Icon {
            grid-area: Icon;
          }
          p {
            width: 100%;
            margin: 0px;
            display: none;
            grid-area: p;
            align-items: center;
            text-align: center;
            color: var(--gray);
            font-size: 20px;
            background: var(--white);
          }
          .Content {
            grid-area: Content;
          }
          section.Error {
            grid-template-rows: 40px 30px auto;
            grid-template-areas:  "input   Icon"
                                  "p       p"
                                  "Content Content";
          }
          section.Error p {
            display: grid;
          }

        `}</style>
      </section>
    )
  }
}

export default Finder
