import React, { Fragment } from 'react'
import Icon from './Icon'

const Add = (props) => {
  let {
    c_fill,
    c_stroke,
    p_stroke
  } = props
  return (
    <Fragment>
      <Icon {...props}>
        <circle
          cx="15"
          cy="15"
          r="14"
          fill={ c_fill }
          stroke={ c_stroke }
          strokeWidth="2"
        />
        <path
          d="M5.10059 10V0M0 4.99383H10"
          transform="translate(10 10)"
          stroke={ p_stroke }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Fragment>
  )
}

export default Add
