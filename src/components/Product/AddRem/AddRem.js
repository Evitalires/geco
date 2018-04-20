import React from 'react'
import IconMore from '../../Icons/more'
import IconLess from '../../Icons/less'

const AddRemove = (props) => (
  <div className='AddRem'>
    <div onClick={props.handleAdder}>
      <IconMore
        size={18}
        color='#788895'
      />
    </div>
    <div onClick={props.handleRemove}>
      <IconLess
        size={18}
        color='#788895'
      />
    </div>
    <style jsx>{`
      .AddRem {
        height: 100%;
        padding-left: 16px;
      }
      .AddRem div:first-child {
        padding-bottom: 8px;
        border-bottom: 2px solid #788895;
      }
      .AddRem div:last-child {
        padding-top: 4px;
      }
    `}</style>
  </div>
)

export default AddRemove
