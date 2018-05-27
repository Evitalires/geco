import React from 'react'
import RegisterProviders from './Components/RegisterProviders'
import Tab from '../../components/Tab/Tab'
import Finder from '../../components/Finder/Finder'

const ProvidersUI = (props) => {
  return (
    <>
      <Finder
        formClass={'Finder'}
        inputPlaceholder='Buscar proveedor'
        classInput={'checkFinderInput'}
      />
      <Tab selected='Registrar'>
        <RegisterProviders title='Registrar'/>
        <h1 title='Proveedores'>Proveedores</h1>
        <h1 title='Categorías'>Categorías</h1>
      </Tab>
    </>
  )
}

export default ProvidersUI
