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
        type='Id'
        inputText={props.id}
        handleBlur={props.handleId}
       />
      <Name
        type='description'
        value={props.name}
        handleBlur={props.handleName}
      />
      <Price
        type='price'
        price={props.cost}
        labelText={'Costo del Producto'}
        handleChange={props.handleCost}
        handleBlur={props.handleCost}
      />
      <Percent
        type='percent'
        percent={props.percent}
        labelText={'Porcentaje de utilidad'}
        handleChange={props.handlePercent}
        handleBlur={props.handlePercent}
      />
      <Price
        type='price'
        price={props.price}
        labelText={'Precio de venta al público'}
        handleBlur={props.handlePrice}
        handleChange={props.handlePrice}
      />
      <Price
        type='price'
        price={props.utility}
        labelText={'Utilidad Neta'}
        handleChange={props.handleUtility}
        handleBlur={props.handleUtility}
      />
      <Quantity
        type='quantity'
        value={props.quantity}
        labelText='Cantidad mínima de venta'
        handleBlur={props.handleQuantity}
      />
      <Quantity
        type='quantity'
        value={props.inventory}
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
