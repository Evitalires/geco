import React from 'react'
import { styleName } from './styles.js'
//Field es necesario, porque cuando yo haga un cambio, hará un update a la db
const FieldUI = (props) => {
  return (
    <div className={props.type}>
      <form onSubmit={props.handleSubmit} autoComplete='off' className={props.name}>
        <label
          htmlFor={props.type}
          className={props.type}
        >
        Producto
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
      <style jsx>{styleName}</style>
    </div>
  )
}

export default FieldUI
