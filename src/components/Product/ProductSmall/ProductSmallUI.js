import React from 'react'
import { styleProduct } from './styles.js'
import AddRemove from './AddRem/AddRem'
import Add from '../../Add/Add.js'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Total from '../components/Total'
import Quantity from '../components/Quantity'

const ProductSmallUI = (props) => (
  <article className={props.className}>
    <Id
      type='Id'
      idShort={true}
      value={props.id}
      inputText='ID'
      inputPlaceHolder='ID'
     />
    <Name
      inputName='description'
      inputText={props.name}/>
    <Quantity
      inputName='quantity'
      inputText={props.quantity}
      handleChange={props.handleChange}
    />
    <Total
      inputName='total'
      inputText={props.price * props.quantity}
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
  </article>
)

export default ProductSmallUI
