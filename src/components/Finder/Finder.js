import React, { Component } from 'react'
import Field from '../Field/Field'
import Search from '../Icons/search'
import Input from '../Input/Input'

class Finder extends Component {
  state = {
    error: this.props.error,
    value: this.props.value,
    placeholder: this.props.placeholder,
    className: this.props.className || '',
    //Styles
    padding: this.props.padding,
    inputColor: this.props.inputColor,
    placeholderColor: this.props.placeholderColor,
    background: this.props.background,
    columnStart: this.props.columnStart,
    columnEnd: this.props.columnEnd,
    rowStart: this.props.rowStart,
    rowEnd: this.props.rowEnd,
  }
  handleClick = event => {
    (this.props.handleClick) && this.props.handleClick(event.target.value)
  }
  handleChange = event => {
    (this.props.handleChange) && this.props.handleChange(event.target.value)
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleBlur(event.target.value)
  }
  handleSubmit = (event) => {
    console.log('Debería hacer una petición');
  }
  handleError = error => {
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error != undefined) {
      this.setState({
        error: nextProps.error
      });
    }
  }
  render() {
    let {
      value,
      placeholder,
      //styles
      padding,
      background,
      inputColor,
      placeholderColor,
      columnStart,
      columnEnd,
      rowStart,
      rowEnd,
    } = this.state
    return (
      <Input
        type='text'
        value={value}
        background={background}
        inputColor={inputColor}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        columnStart={columnStart}
        columnEnd={columnEnd}
        rowStart={rowStart}
        rowEnd={rowEnd}
        icon={
          <Search
            color='var(--light-gray)'
            size={20}
          />
        }
      />
    )
  }
}

export default Finder
