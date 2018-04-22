import React from 'react'
import { stylesButton } from './styles'

const ButtonUI = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.handleClick}
      className={props.className}
      >
      {
        props.text
      }
      <style jsx>{ stylesButton }</style>
    </button>
  )
}

export default ButtonUI
