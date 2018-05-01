import React from 'react'

const Icon = (props) => {
  const { color, size} = props
  return (
    <div>
      <svg
        viewBox='0 0 32 32'
        fill={color}
        height={size}
        width={size}
        >
        {props.children}//importamos el hijo de svg
      </svg>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px;
        }
      `}</style>
    </div>
  )
}

export default Icon
