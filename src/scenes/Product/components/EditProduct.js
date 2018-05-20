import React, { Component } from 'react'

class EditProduct extends Component {
  render() {
    return (
      <ProductExtended
        handleUpdate={props.handleUpdate}
      />
    )
  }
}

export default EditProduct
