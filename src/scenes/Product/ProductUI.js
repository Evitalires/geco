import React from 'react'
import ProductExtended from '../../components/Product/ProductExtended/ProductExtended'
import Finder from '../../components/Finder/Finder'
const ProductUI = () => {
  return (
    <section>
      <Finder
        inputPlaceHolder='Busca productos'
        classInput={'checkFinderInput'}
        classForm={'checkFinderForm'}
        classArticle={'checkFinderArticle'}
      />
      <ProductExtended/>
    </section>
  )
}

export default ProductUI
