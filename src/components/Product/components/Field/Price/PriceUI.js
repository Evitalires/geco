import React from 'react'
import { stylePrice } from './styles.js'

const PriceUI = (props) => {
  return (
    <div className={props.type}>
      <form onSubmit={props.handleSubmit} autoComplete='off' className={props.name}>
        <label
          htmlFor={props.type}
          className={props.type}
        >
        {props.quantity}
        </label>
        <input
          name={props.type}
          className={props.type}
          ref={props.setRef}
          value={props.value}
          onClick={props.handleClick}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <p>{props.error}</p>
      </form>
      <style jsx>{ stylePrice }</style>
    </div>
  )
}

export default PriceUI
