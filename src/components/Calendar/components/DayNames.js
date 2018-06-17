import React, { Component } from 'react'
import moment from 'moment'
import Day from './Day'

const today = {
  day: moment().locale('es').format("ddd").split('').slice(0,3).join(''),
  className: ' selected',
}

class DayNames extends Component {
  state = {
    days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    selected: this.props.selected || [today],
  }
  handleClick = pickDay => {
    let selected = this.state.selected
    if(selected.find(el => el.day == pickDay.day) != undefined) {
      selected = selected.filter( el => el.day != pickDay.day)
      this.setState({
        selected: selected
      });
    }
    else {
      selected = [...selected, pickDay]
      this.setState({
        selected: selected
      });
    }
    (this.props.handleClick) && this.props.handleClick(selected)
  }
  getClassName = day => {
    let { selected } = this.state
    //console.log(typeof selected);
    let today = selected.find(el => el.day === day)
    return (today != undefined ? today.className : ' ')
  }
  componentWillReceiveProps( nextProps ) {
    if(this.props.receiveProps) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }
  render() {
    let { selected, days } = this.state
    return (
      <div className="day-names">
        {
          days.map((day, key) => (
            <Day
              day={day}
              index={key}
              key={day+key}
              className={this.getClassName(day)}
              handleClick={this.handleClick}
            />
          ))
        }
        <style jsx>{`
          div {
            display: grid;
            text-align: center;
            padding: 0 1em;
            grid-auto-flow: column;
            grid-template-columns: repeat(7, 1fr);
          }
        `}</style>
      </div>
        );
  }
}

export default DayNames
