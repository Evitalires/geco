import React from 'react'
import Producto from '../../components/Product/Producto'
import Button from '../../components/Button/Button'
import Total from '../../components/Total/Total'
import AddRemove from '../../components/Product/AddRem/AddRem'
import Finder from '../../components/Finder/Finder'
import { checkingStyles } from './styles'

const CheckingUI = (props) => {
  return (
    <div className={'CheckingUI'}>
      <Finder
        text=''
        place='Find Something'
        input={'checkFinderInput'}
        form={'checkFinderForm'}
        div={'checkFinderDiv'}
        setRef={props.setRef}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
        >
        {
          (props.options.length > 0) &&
          props.options.map((data, key) => (
            <Producto
              {...data}
              key={key}
              helper='addToChecking'
              handleAdd={props.handleAdd}
            />
          ))
        }
      </Finder>
      <div className='CheckingProducts'>
        {
          props.products.map((data, key) => (
            <Producto
              {...data}
              key={key}
              helper='addRemove'
              handleUpdate={props.handleUpdate}
            />
          ))
        }
      </div>
      <Total
        total={props.total}
      >
        <Button
          text='Imprimir'
          handleClick={props.handlePrint}
        />
        <Button
          text='Guardar'
          handleClick={props.handleSave}
        />
        <Button
          text='Efectivo'
          handleClick={props.handleEfective}
        />
      </Total>
      <style jsx>{ checkingStyles }</style>
    </div>
  )
}

export default CheckingUI
