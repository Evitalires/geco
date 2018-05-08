import React from 'react'
import { styleProduct } from './styles'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Quantity from '../components/Quantity'
import Options from '../../Options/Options'

const ProductExtendedUI = (props) => {
  return (
    <article className='ProductExtended'>
      <Id
        type='Id'
        inputText={props.id}
        inputPlaceHolder='ID'
       />
      <Name
        type='description'
        value={props.name}/>
      <Quantity
        type='quantity'
        value={props.quantity}
      />
      <Price
        type='price'
        value={props.price}
      />
      <Options
        className='ProductExtendedOptions'
        typeButtons='checkbox'
        message='Permite Inventario Negativo'
        messageConfirmLabel={'Sí'}
        messageDenyLabel={'No'}
        classButtonConfirm='none'
        classButtonDeny='none'
        handleConfirm={this.handleConfirm}
        handleDeny={this.handleClose}
      />
      <style jsx global>{ styleProduct }</style>
    </article>
  )
}
export default ProductExtendedUI
