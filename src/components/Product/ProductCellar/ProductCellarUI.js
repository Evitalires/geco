import React from 'react'
import { styleProduct } from '../ProductExtended/styles'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Quantity from '../components/Quantity'
import Total from '../components/Total'

const ProductCellarUI = (props) => {
  return (
    <article className='ProductExtended'>
      <Id
        inputName='Id'
        inputText={props.id}
        handleBlur={props.handleId}
       />
      <Name
        inputName='description'
        inputText={props.name}
        handleBlur={props.handleName}
      />
      <Price
        inputName='price'
        inputText={props.cost}
        labelText={'Costo del Producto'}
        handleChange={props.handleCost}
        handleBlur={props.handleCost}
      />
      <Quantity
        inputName='quantity'
        inputText={props.quantity}
        labelText='Unidades a guardar'
        handleChange={props.handleQu}
        handleBlur={props.handleQuantity}
      />
      <Total
        imputName='total'
        labelText='Total'
        inputText={props.cost * props.quantity}
      />
      <style jsx global>{ styleProduct }</style>
    </article>
  )
}
export default ProductCellarUI
