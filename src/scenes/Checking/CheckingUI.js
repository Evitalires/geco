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
    <section className={'CheckingUI'}>
      <Finder
        inputText={props.textFinder}
        setRef={props.setRef}
        inputPlace='Find Something'
        classInput={'checkFinderInput'}
        classForm={'checkFinderForm'}
        classArticle={'checkFinderArticle'}
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
      <section className='CheckingProducts'>
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
      </section>
      <Total
        total={props.total}
        change={props.change}
        effective={props.effective}
        handleChange={props.handleChangeTotal}
        >
        <Print
          opened={props.openPrint}
          nit={props.nit}
          user={props.user}
          total={props.total}
          typePay={props.typePay}
          change={props.change}
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
        error={props.openError}
        message='¿Está seguro de guardar esta factura sin productos registrados?'
        handleCloseOpenError={props.handleCloseOpenError}
      />
      <style jsx>{ checkingStyles }</style>
    </section>
  )
}

export default CheckingUI
