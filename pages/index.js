import * as React from 'react'
import Link from 'next/link'


export default () => (
  <div>
    <Link href='./facturar'>
      <h1>Facturar</h1>
    </Link>
    <Link href='./productos'>
      <h1>Productos</h1>
    </Link>
    <Link href='./proveedores'>
      <h1>Proveedores</h1>
    </Link>
    <style jsx>{`
      margin: 0;
      display: flex;
      width: 100vw;
    `}</style>
  </div>
)
