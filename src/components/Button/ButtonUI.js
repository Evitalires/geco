import React from 'react'
import { stylesButton } from './styles'

const ButtonUI = (props) => {
  return (
    <button
      onClick={props.handleClick}
      >
      {
        props.text
      }
      <style jsx>{ stylesButton }</style>
    </button>
  )
}

export default ButtonUI
