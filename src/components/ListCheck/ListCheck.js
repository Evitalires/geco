import React, { Fragment, Component } from 'react'
import Button from '../Button/Button'
import ProductSmall from '../Product/ProductSmall/ProductSmall'
import { Modal } from '../../components/Modal/Modal'
import  Check from '../../components/Icons/check'
import FieldCheck from './components/FieldCheck'

class ListCheck extends Component {
  state = {
    options: this.props.options,
    select: this.props.select
  }
  handleChange = event => {
    let label = event.target.parentElement.parentElement
    this.setState({select: label.textContent})
    this.saveChanges(label.textContent)
  }
  setIsChecked = text => {
    return (text == this.state.select) ? true : false
  }
  saveChanges = text => {
    (this.props.handleSelect) && this.props.handleSelect(text)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({select: nextProps.select})
  }
  render() {
    return (
      <Fragment>
          <article
             >
            <ul
              onChange={this.handleChange}
              >
              {
                this.state.options.map((text, key) => (
                  <li key={key}>
                    <FieldCheck
                      mensaje={console.log(text)}
                      text={text}
                      checked={this.setIsChecked(text)}/>
                  </li>
                ))
              }
            </ul>
          </article>
        <style jsx>{`
          article {
            padding: 8px;
          }
          article ul {
            padding: 0px;
            margin: 0px;
            list-style: none;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ListCheck
