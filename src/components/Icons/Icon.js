import React from 'react'

const Icon = (props) => {
  const {
    color,
    size,
    viewBox,
    height,
  } = props
  return (
    <div
      onClick={(event) => (props.handleClick) && props.handleClick(event)}
      >
      <svg
        viewBox={ viewBox || '0 0 32 32'}
        fill={color}
        height={height || size}
        width={size}
        >
        {props.children}
      </svg>
      <style jsx>{`
        {
          margin: 0px;
          display: grid;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Icon
