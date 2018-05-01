import React, { Component, Fragment } from 'react'
import Check from '../../../components/Icons/check'

class FieldCheck extends Component {
  state = {
    text: this.props.text,
    id: this.props.text.split(' ').join('')
  }
  handleClick = () => {
    //Setting styles
    this.label.style.color = '#48ACEC'
    this.input.style.background = '#48ACEC'
    this.li.style.borderBottom = '1px solid #48ACEC'
    if(this.box.className.search(/checked/) < 1) {
      this.box.className = this.box.className.replace(/noChecked/, 'checked')
    }
  }
  handleBlur = () => {
    this.label.style.color = '#788895'

    this.input.checked = false
    this.input.style.background = '#788895'

    this.li.style.borderBottom = '1px solid #788895'
    if(this.box.className.search(/noChecked/) < 1) {
      this.box.className = this.box.className.replace(/checked/, 'noChecked')
    }
  }
  setRef = element => {
    this.input = element
    if(this.input != null) {
      this.box = this.input.nextElementSibling
      this.li = this.input.parentElement.parentElement
      this.label = this.li.firstElementChild
    }
  }
  render() {
    return(
      <Fragment>
          <li
            >
            <label
              htmlFor={this.state.id}
              onClick={this.handleClick}
              >
              {this.state.text}
            </label>
            <div className='box'>
              <input
                type="radio"
                id={this.state.id}
                ref={this.setRef}
                onClick={this.handleClick}
                onBlur={this.handleBlur}
              />
              <div className='noChecked'>
                <Check size={20} color='white'/>
              </div>
            </div>
          </li>
          <style jsx>{`
            li {
              height: 40px;
              display: flex;
              margin-top: 5px;
              align-items: center;
              justify-content:space-between;
              border-bottom: 1px solid #788895;
            }
            li label {
              width: 100%;
              color: #788895;
              font-size: 24px;
            }
            li input {
              margin: 0;
              width: 21px;
              height: 21px;
              outline: none;
              appearance: none;
              /* background: #48ACEC; */
              background: #788895;
              border-radius: 100%;
            }
            .box {
              display: flex;
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
      </Fragment>
    )
  }
}

export default FieldCheck
