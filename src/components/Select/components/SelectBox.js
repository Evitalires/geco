import React from 'react'
import Triangle from '../.././Icons/triangle'

const SelectBox = (props) => (
  <div
    className={props.className}
    >
    <h1>{props.text}</h1>
    {
      (props.showIcon) &&
      <span>
        <Triangle
          size={20}
          color='#788895'
        />
      </span>
    }
    <style jsx>{`
      div {
        transition: 5s;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        transition: .5s;
        justify-content: space-between;
      }
      div:hover {
        border: 1px solid #48ACEC;
      }
      h1 {
        margin: 0;
        color: #788895;
        font-weight: 100;
      }
      span {
        padding: 8px;
      }
      .unSelect {
        background: #E5E5E5;
        border: 1px solid #788895;
      }
      .unSelect span {
        transform: rotate(90deg);
      }
      .select {
        background: #48ACEC;
      }
      .select h1 {
        color: #E0EDF3;
      }
      .select span {
        transform: rotate(-90deg);
      }
    `}</style>
  </div>
)

export default SelectBox
