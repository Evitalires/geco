import * as React from 'react'
import Finder from '../.././Finder/Finder'

class Price extends React.Component {
  state = {
    error: false,
    inputText: this.props.price,
    inputName: this.props.type,
    labelText: 'Precio de venta',
  }
  setRef = element => {
    this.input = element
  }
  handleClick = event => {
  }
  handleChange = event => {
    (this.props.handleChange) && this.props.handleChange(event.target.value, 'Price')
  }
  handleBlur = event => {
    (this.props.handleBlur) && this.props.handleChange(event.target.value)
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.error,
      inputText: nextProps.price
    })
  }
  render() {
    return (
      <Finder
        {...this.state}
        setRef={this.setRef}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default Price
