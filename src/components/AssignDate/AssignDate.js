import React, { Component } from 'react'
import IconCalendar from '../Icons/calendar'
import Calendar from '../Calendar/Calendar'
import moment from 'moment'

class AssignDate extends Component {
  state = {
    calendar: true,
    date: this.props.date || 'Fecha',
    description: this.props.description,
  }
  handleClick = event => {
    console.log('Se debería mostrar un calendario')
    this.setState({calendar: true})
  }
  handleChange = date => {
    console.log(typeof date._i);
    this.setState({
      date: date._i,
      calendar: false
    })
  }
  render() {
    return (
      <article>
        <p>{this.state.description}</p>
        <p>{this.state.date}</p>
        <IconCalendar
          size='24px'
          color='var(--bk-light)'
          handleClick={this.handleClick}
        />
        {
          (this.state.calendar)&&
          <div className='box'>
            <Calendar
              selected={this.props.dayForVisit}
              handleChange={this.handleChange}
              multipleCheck={false}
            />
          </div>
        }
        <style jsx>{`
          article {
            display: grid;
            grid-template-rows: 3.7em auto;
            grid-template-columns: 1fr 1fr .5fr;
            align-items: center;
          }
          p {
            margin: 0;
            font-size: 1.2em;
            align-self: center;
            color: var(--gray);
          }
          .box {
            grid-column-end: 3 span;
          }
        `}</style>
      </article>
    )
  }
}

export default AssignDate
