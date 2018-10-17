import React from 'react'

const Icon = (props) => {
  const {
    color,
    size,
    viewBox,
    height,
    rotate,
    area,
    shadow,
    colorHover,
    position,
    top,
    left,
    right,
    bottom,
    justifyContent
  } = props
  return (
    <div
      onClick={(event) => (props.handleClick) && props.handleClick(event)}
      >
      <svg
        fill={color}
        width={size}
        height={height || size}
        viewBox={ viewBox || '0 0 32 32'}
        >
        {
          props.children
        }
      </svg>
      <style jsx>{`
        div {
          margin: 0px;
          display: grid;
          cursor: pointer;
          align-items: center;
          align-self: stretch;
          justify-content: ${justifyContent || 'center'};
          transform: rotate(${rotate});
          position: ${position || 'relative'};
          top: ${top};
          left: ${left};
          right: ${right};
          bottom: ${bottom};
          ${area && `grid-area: ${area}`}
        }
        div svg {
          transition: .1s;
        }
        div:hover svg {
          transform: scale(1.1);
          fill: ${colorHover};
          ${shadow != null && `filter: ${shadow};`}
        }
      `}</style>
    </div>
  )
}

export default Icon
