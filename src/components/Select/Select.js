import React, {Component, Fragment} from 'react'
import ListCheck from '../ListCheck/ListCheck'
import SelectBox from './components/SelectBox'
import Triangle from './../Icons/triangle'
import Check from './../Icons/check'

class Select extends Component {
  state = {
    hidden: this.props.hidden || false,
    context: 'default',
    options: this.props.options,
    text: this.props.text,
    suggest: this.props.suggest ||'Selecciona una',
    selected: this.props.selected || ''
  }
  handleClick = event => {
    this.setContext();
    this.hidden();
  }
  setContext = () => {
    if(this.state.hidden) {
      this.setState({
        context: 'default',
      })
    }
    else {
      this.setState({
        context: 'active',
      })
    }
  }
  hidden = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  handleSelect = text => {
    console.log('Recibí un textooo');
    console.log(text);
    this.setState({
      suggest: text,
      context: 'validate'
    });
    this.hidden()
    //this.handleAnswer(text)
  }
  handleAnswer = text => {
    (this.props.handleAnswer) && this.props.handleAnswer(text)
  }
  render(){
    let {
      context,
      hidden,
      text,
      suggest,
      selected
    } = this.state
    return (
      <article
        className={ context }
        >
          <h1>{ text }</h1>
          <div
            className='selectHeader'
            >
            <h1
              onClick={this.handleClick}>
              {
                suggest
              }
            </h1>
            {
              (this.state.context == 'validate')
              ? <Check
                size='1em'
                color='var(--bk-light)'
                handleClick={this.handleClick}/> : <Triangle
                size='1em'
                color={
                  this.state.hidden
                  ? 'var(--white)'
                  : 'var(--light-gray)'
                }
                optionsRotate={ ["90deg", "30deg"] }
                handleClick={this.handleClick}/>
            }
          </div>
          {
            (this.state.hidden)
            &&
            <ListCheck
              options={this.state.options}
              context={this.state.context}
              selected={this.state.selected}
              handleSelect={this.handleSelect}
            />
          }
        <style jsx>{`
          article {
            padding: 0px;
            display: grid;
            grid-template-rows: 1.5em 2em;
          }
          article h1 {
            font-size: .9em;
            font-weight: normal;
            color: var(--light-gray);
          }
          .selectHeader {
            display: grid;
            align-content: center;
            align-items: center;
            grid-auto-flow: column;
            grid-template-rows: 1.5em;
            grid-template-columns: 1fr 2em;
            border: 1px solid var(--light-gray)
          }
          .selectHeader h1 {
            font-size: 1em;
            padding-left: .5em;
          }
          .default {
            border-bottom: 1px solid var(--light-gray)
          }
          .active .selectHeader {
            background: var(--bk-light);
            border: 1px solid var(--bk-light);
          }
          .active .selectHeader h1 {
            color: var(--white);
          }
          .validate .selectHeader {
            border: 1px solid var(--bk-light);
          }
        `}</style>
      </article>
    )
  }
}

export default Select
