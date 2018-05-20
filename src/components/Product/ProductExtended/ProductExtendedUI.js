import React from 'react'
import { styleProduct } from './styles'
import Id from '../components/Id'
import Name from '../components/Name'
import Price from '../components/Price'
import Percent from '../components/Percent'
import Quantity from '../components/Quantity'

import OptionsField from '../../Options/OptionsField'

import Select from '../.././Select/Select'
import Button from '../.././Button/Button'
import FieldCheck from '../.././FieldCheck/FieldCheck'

const ProductExtendedUI = (props) => {
  return (
    <article className='ProductExtended'>
      <Id
        inputName='Id'
        idShort={false}
        inputText={props.id}
        handleBlur={props.handleId}
       />
      <Name
        inputName='Description'
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
      <Percent
        inputName='percent'
        inputText={props.percent}
        labelText={'Porcentaje de utilidad'}
        handleChange={props.handlePercent}
        handleBlur={props.handlePercent}
      />
      <Price
        inputName='price'
        inputText={props.price}
        labelText={'Precio de venta al público'}
        handleBlur={props.handlePrice}
        handleChange={props.handlePrice}
      />
      <Price
        inputName='price'
        inputText={props.utility}
        labelText={'Utilidad Neta'}
        handleChange={props.handleUtility}
        handleBlur={props.handleUtility}
      />
      <Quantity
        inputName='quantity'
        inputText={props.quantity}
        labelText='Cantidad mínima de venta'
        handleBlur={props.handleQuantity}
      />
      <Quantity
        inputName='quantity'
        inputText={props.inventory}
        labelText='Unidades disponibles'
        handleBlur={props.handleInventory}
      />
      <OptionsField
        title='¿Acepta inventario negativo?'
        handleAnswer={props.handleInventoryNegative}
      />
      <OptionsField
        title='¿Este producto pertenece a otro?'
        handleAnswer={props.handleProductBelongs}
      />
      <Select
        options={['Exento', 'Gravado', 'Otro']}
        mainText={'Clasificación Iva'}
        selecText={'Selecciona una'}
        handleAnswer={props.handleClassificationIva}
      />
      <Select
        options={['Lacteos', 'Abarrote', 'Aseo Personal', 'Aseo General']}
        mainText={'Categoría'}
        selecText={'Selecciona una'}
        handleAnswer={props.handleCategory}
      />
      <style jsx global>{ styleProduct }</style>
    </article>
  )
}
export default ProductExtendedUI
