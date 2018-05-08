import React from 'react'
import { styleProduct } from './styles.js'
import AddRemove from './AddRem/AddRem'
import Add from '../../Add/Add.js'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Quantity from '../components/Quantity'

const ProductSmallUI = (props) => (
  <article className={props.classNameArticle}>
    <Id
      type='Id'
      idShort={true}
      value={props.id}
      inputPlaceHolder='ID'
     />
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
  </article>
)

export default ProductSmallUI
