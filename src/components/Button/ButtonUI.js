import React from 'react'
import { stylesButton } from './styles'

const ButtonUI = (props) => {
  return (
      <label>
        {
          props.textLabel
        }
        <input
          type={props.type}
          onClick={props.handleClick}
          className={props.className}
          value={props.textInput}
        />
        <style jsx>{ stylesButton }</style>
      </label>
  )
}

export default ButtonUI
