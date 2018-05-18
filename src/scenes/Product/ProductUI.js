import React from 'react'
import ProductExtended from '../../components/Product/ProductExtended/ProductExtended'
import Finder from '../../components/Finder/Finder'
import Button from '../../components/Button/Button'

const ProductUI = props => {
  return (
    <section>
      <Finder
        inputPlaceHolder='Busca productos'
        classInput={'checkFinderInput'}
        classForm={'checkFinderForm'}
        classArticle={'checkFinderArticle'}
      />
      <ProductExtended
        handleUpdate={props.handleUpdate}
      />
      <Button
        type='button'
        textInput='Guardar'
        className='buttonLight'
        handleClick={props.handleSave}
      />
    </section>
  )
}

export default ProductUI
