import React, { Component } from 'react'
import moment from 'moment'

class Day extends Component {
  state = {
    day: this.props.day,
    index: this.props.index,
    className: this.props.className,
  }
  handleClick = event => {
    (this.props.handleClick) && this.props.handleClick(this.state)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      className: nextProps.className
    })
  }
  render() {
    let { selected, day } = this.state
    return(
      <span
        className = {
          'day' +
          this.state.className
        }
        onClick={this.handleClick}
        >
        {day}
        <style jsx>{`
          span {
            padding: 0;
            border: none;
            cursor: pointer;
            position: relative;
            color: var(--gray);
            border: 2px solid transparent;

          }
          span::first-letter {
            text-transform: capitalize;
          }
          .selected {
            transition: .5s;
            color: var(--black);
            border-bottom: 2px solid var(--bk-light);
          }
          .innerSelected::after {
            top: 50%;
            left: 0px;
            width: calc(100% + 4px);
            height: 2px;
            content: "";
            position: absolute;
            background: var(--bk-light);
          }
          .selectedVisit {
            color: var(--black);
            border: 2px solid transparent;
            border-left: 2px solid var(--bk-light);
          }
          .selectedVisit::after {
            content: '';
            left: 2px;
            top: 10%;
            height: 80%;
            min-width: 20px;
            position: absolute;
            background: var(--bk-light);
            clip-path: polygon(0% 100%,50% 50%,0% 0%)
          }
          .selectedDelivery {
            color: var(--black);
            border: 2px solid transparent;
            border-right: 2px solid var(--bk-light);
          }
          .selectedDelivery::after {
            content: '';
            right: 2px;
            top: 10%;
            height: 80%;
            min-width: 20px;
            position: absolute;
            background: var(--bk-light);
            clip-path: polygon(100% 0%, 50% 50%, 100% 100%)
          }
        `}</style>
      </span>
    )
  }
}

export default Day
