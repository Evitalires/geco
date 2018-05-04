import React from 'react'
import { Finder } from './styles'

const FinderUI = (props) => {
  return (
    <article
      onClick={props.handleClick}
      className={props.classArticle}
      >
      <form
        autoComplete='off'
        action={props.action}
        className={props.classForm}
        onSubmit={props.handleSubmit}
        >
        <label
          htmlFor={props.name}
          className={props.classLabel}
        >
          {props.labelText}
        </label>
        <input
          type="text"
          name={props.name}
          ref={props.setRef}
          value={props.inputText}
          placeholder={props.inputPlace}
          onBlur={props.handleBlur}
          onClick={props.handleClick}
          onChange={props.handleChange}
          className={props.classInput}
        />
        <p className={props.classMessage}>
          {props.error}
        </p>
      </form>
      {props.children}
      <style jsx>{ Finder }</style>
    </article>
  )
}

export default FinderUI
