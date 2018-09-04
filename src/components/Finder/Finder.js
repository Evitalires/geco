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
    inputColor: this.props.inputColor,
    placeholderColor: this.props.placeholderColor,
    background: this.props.background,
    columnEnd: this.props.columnEnd,
    padding: this.props.padding,
  }
  handleClick = event => {
    if(this.state.className.search('Focus') == -1) {
      this.setState({ className: this.state.className + ' Focus' });
    }
    (this.props.handleClick) && this.props.handleClick(event)
  }
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
    (this.props.handleChange) && this.props.handleChange(event.target.value)
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
    let {
      columnEnd,
      background,
      padding,
      height,
      inputColor,
      placeholder,
      placeholderColor,
    } = this.state
    return (
      <Input
        type='text'
        value={''}
        inputColor={inputColor}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
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
