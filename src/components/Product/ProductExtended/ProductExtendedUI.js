import React from 'react'
import { styleProduct } from './styles'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Quantity from '../components/Quantity'
import Options from '../../Options/Options'
import Select from '../.././Select/Select'
import Button from '../.././Button/Button'

const ProductExtendedUI = (props) => {
  return (
    <article className='ProductExtended'>
      <Id
        type='Id'
        inputText={props.id}
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
        price={props.price}
        handleChange={props.handlePrice}
      />
      <Select
        options={['Exento', 'Otro', 'Otro']}
        mainText={'Clasificación Iva'}
        selecText={'Selecciona una'}
      />
      <Select
        options={['Lacteos', 'Abarrote', 'Aseo Personal', 'Aseo General']}
        mainText={'Categoría'}
        selecText={'Selecciona una'}
      />
      <Options
        className='ProductExtendedOptions'
        typeButtons='checkbox'
        message='¿Permite Inventario Negativo?'
        messageConfirmLabel={'Sí'}
        messageDenyLabel={'No'}
        classButtonConfirm='none'
        classButtonDeny='none'
        handleConfirm={this.handleConfirm}
        handleDeny={this.handleClose}
      />
      <Options
        className='ProductExtendedOptions'
        typeButtons='checkbox'
        message='¿Este producto es parte de otro?'
        messageConfirmLabel={'Sí'}
        messageDenyLabel={'No'}
        classButtonConfirm='none'
        classButtonDeny='none'
        handleConfirm={this.handleConfirm}
        handleDeny={this.handleClose}
      />
      <Button
        type='button'
        textInput='Guardar'
        className='buttonDark'
      />
      <style jsx global>{ styleProduct }</style>
    </article>
  )
}
export default ProductExtendedUI
