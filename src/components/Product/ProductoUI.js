import React from 'react'
import { styleProduct } from './styles.js'
import AddRemove from './AddRem/AddRem'
import Add from '../Add/Add.js'
import Id from './components/Field/Id'
import Name from './components/Field/Name'
import Price from './components/Field/Price'
import Quantity from './components/Field/Quantity'

const ProductoUI = (props) => (
  <div className={props.className || 'Product'}>
    <Id
      type='Id'
      value={props.id} />
    <Name
      type='description'
      value={props.name}/>
    <Quantity
      type='quantity'
      value={props.quantity}
      handleChange={props.handleChange}
    />
    <Price
      type='price'
      value={props.total}
      handleChange={props.handleChange}
    />
    {
      (props.helper == 'addRemove') &&
        <AddRemove
          handleAdder={props.handleAdder}
          handleRemove={props.handleRemove}
        />
    }
    {
      (props.helper == 'addToChecking') &&
        <Add
          handleAdd={props.handleAdd}
          className='AddButton'
        />
    }
    <style jsx global>{styleProduct}</style>
  </div>
)

export default ProductoUI
/*
  Producto hará:
   fetch a la base de datos
   recibir eventos de AddRem para cambiar el estado de cantidad
*/
