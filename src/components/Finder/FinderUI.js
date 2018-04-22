import React from 'react'
import { Finder } from './styles'

const FinderUI = (props) => {
  return (
    <div
      onClick={props.handleClick}
      onBlur={props.handleBlur}
      className={props.classDiv}
      >
      <form
        autoComplete='off'
        className={props.classForm}
        >
        <label
          htmlFor="finder"
          className={props.classLabel}
        >
          {props.labelText}
        </label>
        <input
          type="text"
          name="finder"
          ref={props.setRef}
          value={props.inputText}
          placeholder={props.inputPlace}
          onChange={props.handleChange}
          className={props.classInput}
        />
        <p>{props.error}</p>
      </form>
      {props.children}
      <style jsx>{ Finder }</style>
    </div>
  )
}

export default FinderUI
