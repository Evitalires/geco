import React from 'react'
import { Finder } from './styles'

const FinderUI = (props) => {
  return (
    <div
      className={props.div}
      onClick={props.handleClick}
      onBlur={props.handleBlur}
      >
      <form
        autoComplete='off'
        className={props.form}
        >
        <label htmlFor="finder"></label>
        <input
          type="text"
          name="finder"
          ref={props.setRef}
          value={props.text}
          className={props.input}
          placeholder={props.place}
          onChange={props.handleChange}
        />
        <p>{props.error}</p>
      </form>
      {props.children}
      <style jsx>{ Finder }</style>
    </div>
  )
}

export default FinderUI
