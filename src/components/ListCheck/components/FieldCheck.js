import React, { Component, Fragment } from 'react'
import Check from '../../../components/Icons/check'

class FieldCheck extends Component {
  state = {
    text: this.props.text,
    checked: this.props.checked,
    id: this.props.text.split(' ').join('')
  }
  handleClick = event => {
    console.log(this.state.text);
    //Setting styles
    this.label.style.color = '#48ACEC'
    this.input.style.border = '2px solid #48ACEC'
    this.label.style.borderBottom = '1px solid #48ACEC'
    if(this.check.className.search(/checked/) < 1) {
      this.check.className = this.check.className.replace(/noChecked/, 'checked')
    }
    this.input.focus()
  }
  handleBlur = event => {
    //unsetting styles
    this.label.style.color = '#788895'
    this.input.checked = false
    this.input.style.border = '2px solid #788895'

    this.label.style.borderBottom = '1px solid #788895'
    if(this.check.className.search(/noChecked/) < 1) {
      this.check.className = this.check.className.replace(/checked/, 'noChecked')
    }
  }
  setRef = element => {
    this.input = element
    if(this.input != null) {
      this.check = this.input.nextElementSibling
      this.label = this.input.parentElement.parentElement
    }
  }
  componentDidMount() {
    if(this.state.checked) {
      setTimeout(() => this.handleClick(), 0)
    }
  }
  render() {
    return(
      <Fragment>
            <label
              className='FieldCheck'
              htmlFor={this.state.id}
              onClick={this.handleClick}
              >
              {this.state.text}
              <div
                className='box'
                onClick={this.handleClick}
                >
                  <input
                    type="radio"
                    id={this.state.id}
                    ref={this.setRef}
                    onBlur={this.handleBlur}
                  />
                  <div className='noChecked'>
                    <Check size={20} color='#48ACEC'/>
                  </div>
                </div>
              <style jsx>{`
                .FieldCheck {
                  width: 100%;
                  height: 40px;
                  color: #788895;
                  font-size: 24px;
                  margin-top: 8px;
                  display: flex;
                  align-items: center;
                  justify-content:space-between;
                  border-bottom: 1px solid #788895;
                }
                .FieldCheck p {
                  display: block;
                }
                input {
                  margin: 0;
                  width: 20px;
                  height: 20px;
                  outline: none;
                  appearance: none;
                  border-radius: 100%;
                  border: 2px solid #788895;
                  background-color: transparent;
                }
                .FieldCheck .box {
                  width: 20px;
                  display: flex;
                  height: 30px;
                  align-items:center;
                }
                .noChecked {
                  display: none;
                }
                .checked {
                  margin: -3px 3px;
                  position: absolute;
                }
              `}
              </style>
            </label>
      </Fragment>
    )
  }
}

export default FieldCheck
