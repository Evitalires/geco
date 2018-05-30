import React from 'react'
import RegisterProviders from './Components/RegisterProviders'
import Tab from '../../components/Tab/Tab'
import Finder from '../../components/Finder/Finder'

const ProvidersUI = (props) => {
  return (
    <>
      <Finder
        placeholder='Buscar proveedor'
      >
        {

        }
      </Finder>
      <Tab selected='Registrar'>
        <RegisterProviders title='Registrar'/>
        <h1 title='Proveedores'>Proveedores</h1>
        <h1 title='Categorías'>Categorías</h1>
      </Tab>
      <style jsx global>{`
        body {
          margin: 0px;
          font-family: arial;
          --bk-light: #48ACEC;
          --bk-dark: #164461;
          --gray: #788895;
          --white: #E0EDF3;
          --black: #182C39;
          font-size: 16px;
        }
      `}</style>
    </>
  )
}

export default ProvidersUI