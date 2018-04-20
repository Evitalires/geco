import React from 'react'
import { styleTotal } from './styles.js'

const TotalUI = (props) => {
  return (
    <div className='Total'>
      <div className='TotalRef'>
        <h2 className='TotalText'>
          Total:
        </h2>
        <h2 className='TotalValor'>
          {
            `$ ${props.total}`
          }
        </h2>
      </div>
      <div className='TotalButtons'>
        {
          props.children
        }
      </div>
      <style jsx>{ styleTotal }</style>
    </div>
  )
}

export default TotalUI
