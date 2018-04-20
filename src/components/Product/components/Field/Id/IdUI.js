import React from 'react'
import { styleId } from './style.js'
//Field es necesario, porque cuando yo haga un cambio, hará un update a la db
const IdUI = (props) => {
  return (
    <div className='Idu'>
      <form onSubmit={props.handleSubmit} autoComplete='off' className={props.name}>
        <label
          htmlFor={props.name}
          className={props.name}
        >
          {props.name}
        </label>
        <input
          name={props.name}
          className={props.name}
          ref={props.setRef}
          value={props.value}
          onKeyUp={props.handleKeyUp}
          onClick={props.handleClick}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <p>{props.error}</p>
      </form>
      <style jsx>{ styleId }</style>
    </div>
  )
}

export default IdUI
