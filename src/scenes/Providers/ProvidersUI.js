import React from 'react'
import RegisterProviders from './Components/RegisterProviders'
import ListProviders from './Components/ListProviders/ListProviders'
import Categories from './Components/Categories/Categories'
import Tab from '../../components/Tab/Tab'
import Finder from '../../components/Finder/Finder'

const ProvidersUI = (props) => {
  return (
    <section>
      <Finder
        placeholder='Buscar proveedor'
      >
        {

        }
      </Finder>
      <Tab selected={ props.selected || 'Categorías' } >
        <RegisterProviders title='Registrar'/>
        <ListProviders
          title='Provedores'
          handleNewProvider={props.handleNewProvider}
        />
        <Categories
          title='Categorías'
        />
      </Tab>
      <style jsx global>{`
        body {
          margin: 0px;
          font-size: 16px;
          font-family: arial;
          scroll-behavior: unset;
          --bk-light: #48ACEC;
          --bk-dark: #164461;
          --gray: #788895;
          --white: #E0EDF3;
          --black: #182C39;
          --light-gray: #ABB7BF;
          --heightFinder: 4em;
          --shadow: 0px 4px 4px rgba(0,0,0,0.25);
          background: var(--white);
        }
        ul {
          margin: 0;
          padding: 0;
        }
        h1 {
          margin: 0;
          font-size: 1em;
        }
        h2 {
          margin: 0;
          font-size: 1em;
          font-weight: normal;
        }
      `}</style>
      <style jsx>{`
        section {
          display: grid;
          background: var(--white);
          height: 100vh;
          grid-template-rows: max-content 1fr;
        }
      `}</style>
    </section>
  )
}

export default ProvidersUI
