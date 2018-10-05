import React, { Component, Fragment } from 'react'
import CheckOption from '../../components/Icons/CheckOption'
import Input from '../../components/Input/Input'

class FieldCheck extends Component {
  state = {
    click: false,
    text: this.props.text,
    selected: this.props.selected,
    //Styles
    fillCircle: 'transparent',
    strokeCircle:'var(--light-gray)',
    fillCheck: 'transparent',
  }
  handleClick = () => {
    let styleOption = this.styleOption(this.state.click, this.state.selected)
    this.setState({
      fillCircle: styleOption.fillCircle,
      strokeCircle: styleOption.strokeCircle,
      fillCheck: styleOption.fillCheck,
    });
    this.props.handleClick && this.props.handleClick(this.state.text)
  }
  styleOption = click => {

    let style = {}
    if (click) {
      style = {
        fillCircle: 'transparent',
        strokeCircle:'var(--light-gray)',
        fillCheck: 'transparent'
      }
      this.setState({ click: false });
    }
    else if(!click) {
      style = {
        fillCircle: 'transparent',
        strokeCircle:'var(--bk-light)',
        fillCheck: 'var(--bk-light)',
      }
      this.setState({ click: true });
    }
    return style
  }

  handleBlur = event => {

  }
  componentWillReceiveProps(nextProps) {
    this.setState({selected: nextProps.selected});
    if(nextProps.selected != this.state.text) {
      this.setState({
        click: false,
        fillCircle: 'transparent',
        strokeCircle:'var(--light-gray)',
        fillCheck: 'transparent',
      })
    }
  }
  render() {
    let {
      text,
    } = this.state
    return(
      <div>
        <p
          onClick={ this.handleClick }
          >
          { text }
        </p>
        <CheckOption
          size='1.2em'
          viewBox='0 0 20 18'
          fillCircle={ this.state.fillCircle }
          strokeCircle={ this.state.strokeCircle }
          fillCheck={ this.state.fillCheck }
          handleClick={this.handleClick}
        />
        <style jsx>{`
          div {
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 1fr 2em;
            grid-template-rows: 1.5em;
          }
          div p {
            margin: 0px;
            color: var(--light-gray);
          }
          div:hover p {
            color: var(--black)
          }
          div p::first-letter {
            text-transform: capitalize;
          }
        `}</style>
      </div>
    )
  }
}

export default FieldCheck
