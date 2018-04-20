import React from 'react'
import { Fieldstyle } from '../productStyles.js'
//Field es necesario, porque cuando yo haga un cambio, hará un update a la db
const FieldUI = (props) => {
  return (
    <div className='Field'>
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
      <style jsx>{Fieldstyle}</style>
    </div>
  )
}

export default FieldUI
