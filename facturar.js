import React, {Component} from 'react'
import Data from '../src/services/api.json'
import Head from 'next/head'
import Finder from '../src/components/Finder/Finder'
import Checking from '../src/scenes/Checking/Checking'

const Facturar  = () =>  {
    return (
      <div>
        <Head>
          <title>Geko</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Checking/>
      </div>
    )
}
export default Facturar
