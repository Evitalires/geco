import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import ProductSmall from '../Product/ProductSmall/ProductSmall'
import { Modal } from '../../components/Modal/Modal'
import  Check from '../../components/Icons/check'
import FieldCheck from '../FieldCheck/FieldCheck'

class ListCheck extends Component {
  state = {
    options: this.props.options,
    selected: this.props.selected
  }
  handleClick = text => {
    console.log('Recibí un texto');
    (this.props.handleSelect) && this.props.handleSelect(text)
  }
  handleChange = text => {
    let label = event.target.parentElement.parentElement
    this.setState({selected: label.textContent})
    this.saveChanges(label.textContent)
  }
  setIsChecked = text => {
    return (text == this.state.selected) ? true : false
  }
  saveChanges = text => {
    (this.props.handleSelect) && this.props.handleSelect(text)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({selected: nextProps.selected})
  }
  render() {
    return (
      <Fragment>
          <article
            className={ this.props.context }
             >
            <ul
              onChange={this.handleChange}
              >
              {
                this.state.options.map((text, key) => (
                  <li key={key}>
                    <FieldCheck
                      text={text}
                      selected={this.state.selected}
                      handleClick={this.handleClick}
                      checked={this.setIsChecked(text)}/>
                  </li>
                ))
              }
            </ul>
          </article>
        <style jsx>{`
          article {
            border: 1px solid var(--light-gray);
          }
          article ul {
            margin: 0px;
            padding: 0px;
            list-style: none;
            padding-left: 1em;
          }
          .active {
            border: 1px solid var(--bk-light);
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ListCheck
