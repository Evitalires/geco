import React, {Component, Fragment} from 'react'
import ListCheck from '../ListCheck/ListCheck'
import SelectBox from './components/SelectBox'

class Select extends Component {
  state = {
    hidden: true,
    options: this.props.options,
    mainText: this.props.mainText,
    selecText: this.props.selecText
  }
  handleClick = event => {
      this.setState({hidden: !this.state.hidden})
  }
  handleSelect = text => {
    console.log('Recibí un textooo');
    console.log(text);
    this.setState({
      selecText: text
    });
    //this.handleAnswer(text)
  }
  handleAnswer = text => {
    (this.props.handleAnswer) && this.props.handleAnswer(text)
  }
  render(){
    return (
      <article
        onClick={this.handleClick}
        >
          <h1>{this.state.mainText} || {this.state.selecText}</h1>
          <ListCheck
            options={this.state.options}
            select={this.state.selecText}
            handleSelect={this.handleSelect}
          />
        {/* {

          (this.state.hidden)
          && <SelectBox
            showIcon={true}
            text={this.state.selecText}
            className={
              (this.props.selecText != this.state.selecText)
              ? 'select'
              : 'unSelect' }
            />
        } */}
        <style jsx>{`
          h1 {
            font-size: 1em;
            font-weight: normal;
            color: var(--light-gray);
          }
          article {
            border: 1px solid var(--light-gray);
            border-top: none;
            padding: 0px 1em 2em 1em;
          }
        `}</style>
      </article>
    )
  }
}

export default Select
