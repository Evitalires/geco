import React, { Component, Fragment } from 'react'
import ProductExtended from '../../components/Product/ProductExtended/ProductExtended'
import ProductCellar from '../../components/Product/ProductCellar/ProductCellar'
import Finder from '../../components/Finder/Finder'
import Button from '../../components/Button/Button'
import Tab from '../../components/Tab/Tab'
import EditProduct from './components/EditProduct'
import CellarProduct from './components/CellarProduct'

const ProductUI = props => {
  return (
    <section>
      <Finder
        inputPlaceHolder='Buscar producto'
        classInput={'checkFinderInput'}
        classForm={'checkFinderForm'}
        classArticle={'checkFinderArticle'}
      >
      </Finder>
      <Tab selected='Bodega'>
        <ProductExtended
          title='Editar'
        />
        <ProductCellar
          title='Bodega'
          handleUpdate={props.handleUpdate}
        />
      </Tab>
      <Button
        type='button'
        textInput='Guardar'
        className='buttonLight'
        handleClick={props.handleSave}
      />
      <style jsx>{`
        min-height: 100vh;
        background: #e0edf4;
      `}</style>
    </section>
  )
}

export default ProductUI
