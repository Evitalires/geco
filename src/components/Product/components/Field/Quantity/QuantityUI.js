import React from 'react'
import { styleQuantity } from './styles.js'

const QuantityUI = (props) => {
  return (
    <div className={props.type}>
      <form onSubmit={props.handleSubmit} autoComplete='off' className={props.name}>
        <label
          htmlFor={props.type}
          className={props.type}
        >
        {props.type}
        </label>
        <input
          name={props.type}
          className={props.type}
          value={props.quantity}
          onClick={props.handleClick}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <p>{props.error}</p>
      </form>
      <style jsx>{ styleQuantity }</style>
    </div>
  )
}

export default QuantityUI
