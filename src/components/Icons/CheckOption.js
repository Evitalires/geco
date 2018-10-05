<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">

</svg>
import React, { Fragment } from 'react'
import Icon from './Icon'

const CheckOption = (props) => {
  let {
    fillCircle,
    strokeCircle,
    fillCheck,
  } = props
  return (
    <>
      <Icon {...props}>
        <path
          d="M15.5 10.0018C15.5 14.1428 12.1422 17.5 8 17.5C3.85776 17.5 0.5 14.1428 0.5 10.0018C0.5 5.86081 3.85776 2.50366 8 2.50366C12.1422 2.50366 15.5 5.86081 15.5 10.0018Z"
          fill={fillCircle || 'transparent'}
          stroke={strokeCircle || 'transparent'}/>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.40909 11.8657L4.35227 7.16418L3 8.73134L8.40909 15L20 1.56716L18.6477 0L8.40909 11.8657Z"
          fill={ fillCheck || 'transparent' }
        />
      </Icon>
    </>
  )
}

export default CheckOption
