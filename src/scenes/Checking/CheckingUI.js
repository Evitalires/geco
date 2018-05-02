import React from 'react'
import Producto from '../../components/Product/Producto'
import Button from '../../components/Button/Button'
import Total from '../../components/Total/Total'
import AddRemove from '../../components/Product/AddRem/AddRem'
import Finder from '../../components/Finder/Finder'
import TypePay from '../../components/TypePay/TypePay'
import Print from '../../components/Print/Print'
import ErrorModal from '../../components/Error/Error'
import { checkingStyles } from './styles'

const CheckingUI = (props) => {
  return (
    <div className={'CheckingUI'}>
      <Finder
        inputText=''
        setRef={props.setRef}
        inputPlace='Find Something'
        classInput={'checkFinderInput'}
        classForm={'checkFinderForm'}
        classDiv={'checkFinderDiv'}
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
        change={props.change}
        effective={props.effective}
        handleChange={props.handleChangeTotal}
        >
        <Print
          opened={props.opened}
          user={props.user}
          nit={props.nit}
          total={props.total}
          typePay={props.typePay}
          products={props.products}
          addresses={props.addresses}
          handlePrintSave={props.handlePrintSave}
        />
        <Button
          text='Guardar'
          className='buttonDark'
          handleClick={props.handleSave}
        />
        <TypePay
          onClick={props.handleOpenTypePay}
          opened={props.openTypePay}
          typePay={props.typePay}
          handleSaveTypePay={props.handleSaveTypePay}
          handleOpenCloseTypePay={props.handleOpenCloseTypePay}
        />
      </Total>
      <ErrorModal
        error={props.error}
        message='¿Está seguro de guardar esta factura sin productos registrados?'
        handleClose={props.handleCloseModalError}
      />
      <style jsx>{ checkingStyles }</style>
    </div>
  )
}

export default CheckingUI
