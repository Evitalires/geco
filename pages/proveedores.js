import React, { Fragment } from 'react'
import { Modal } from '../src/components/Modal/Modal'
import Data from '../src/services/api.json'
import Providers from '../src/scenes/Providers/Providers'

const Proveedores  = () => {
  return (
    <Providers>
      <style jsx global>{`
        body {
          margin: 0;
          --bk-light: #48ACEC;
          --bk-dark: #164461;
          --gray: #788895;
          --white: #E0EDF3;
          --black: #182C39;
          --shadow: 0px 4px 4px rgba(0,0,0,0.25);
        }
      `}
      </style>
    </Providers>
  )
}
export default Proveedores
