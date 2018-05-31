import React from 'react'

const Icon = (props) => {
  const {color, size} = props
  return (
    <div
      onClick={(event) => (props.handleClick) && props.handleClick(event)}
      >
      <svg
        viewBox='0 0 32 32'
        fill={color}
        height={size}
        width={size}
        >
        {props.children}
      </svg>
      <style jsx>{`
        {
          margin: 0px;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Icon
