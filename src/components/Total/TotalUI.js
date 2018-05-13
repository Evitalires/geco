import React from 'react'
import Finder from '../Finder/Finder'
import { styleTotal } from './styles.js'

const TotalUI = (props) => {
  return (
    <article className='Total'>
      <div className='TotalRef'>
        <h2 className='TotalText'>Total</h2>
        <h2 className='TotalValor'>{props.total}</h2>
      </div>
      <Finder
        inputText={props.effective}
        inputPlace={'$ 0'}
        labelText='Efectivo'
        handleChange={props.handleChange}
        handleClick={props.handleClick}
        classArticle='finderChange'
      />
      <div className='TotalRef'>
        <h4 className='TotalText'>Cambio</h4>
        <h4 className='TotalValor'>{props.change || '$ 0'}</h4>
      </div>
      <section className='TotalButtons'>{props.children}</section>
      <style jsx>{ styleTotal }</style>
    </article>
  )
}

export default TotalUI
