import React, { Component } from 'react'
import DayNames from './components/DayNames'
import moment from 'moment'

class Calendar extends Component {
  state = {
    month: moment(),
    selected: this.props.selected || moment().startOf('day'),
    multipleCheck: this.props.multipleCheck || false
  }
  previous = () => {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next = () => {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1,'month'),
    });
  }

  select = day => {
    if(this.state.multipleCheck) {
      let selected = [ this.state.selected[1] || this.state.selected , day.date ]
      this.setState({
         selected: selected,
      });
    }
    else {
      this.setState({
        selected: day.date,
        month: day.date.clone(),
      });
    }
  }

  renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
      selected,
      month,
    } = this.state;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={(day)=>{this.select(day)}}
          selected={selected}
          selectedArray={this.state.selectedArray}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel = () => {
    const { month } = this.state;

    return (
      <span
        className="month-label">
        {month.locale('es').format("MMMM DD YYYY")}
        <style jsx>{`
          span {
            width: 100%;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
            color: var(--bk-dark);
            border-bottom: 1px solid var(--bk-light);
          }
          span::first-letter {
            text-transform: uppercase;
          }
        `}</style>
      </span>
    )
  }
  componentDidUpdate(eve) {
    let today = String(moment().startOf('day')._d)
    let selected = String(this.state.selected._d)
    if(today != selected) {
      selected = selected.split(' ')
      selected = [selected[2], selected[1], selected[3]]
      selected = selected.join('-')

      let day = moment(selected, 'DD-MMM-YYYY');
      setTimeout(() => {
        (this.props.handleChange) && this.props.handleChange(day);
      }, 500)
    }
    else {
      console.log('Es solo un cambio de instancia');
    }
  }
  render() {
    return (
      <section className="calendar">
        <header className="header">
          <div className="month">
            <i className="" onClick={this.previous}>{'<'}</i>
            {this.renderMonthLabel()}
            <i className="" value='>'onClick={this.next}>{'>'}</i>
          </div>
          <DayNames />
        </header>
        <div className="weeks">
          {this.renderWeeks()}
        </div>
        <style jsx>{`
          .calendar {
            display: grid;
            align-items: center;
            grid-template-rows: 4.5em auto;
            border: 1px solid var(--bk-light)
          }
          .header {
            display: grid;
            align-items: center;
            background: var(--white);
            grid-template-rows: 3em 1.5em;
          }
          .month {
            height: 100%;
            display: grid;
            align-content: center;
            justify-items: center;
            grid-auto-flow: column;
            grid-template-columns: 3em 1fr 3em;
          }
          .month i {
            font-weight: bold;
            cursor: pointer;
            font-size: 1.5em;
            color: (--bk-black);
            color: var(--bk-light);
          }
          .weeks {

          }
        `}</style>
      </section>
    );
  }
}

export default Calendar


class Week extends React.Component {
  render() {
    let days = [];
    let {
      date,
    } = this.props;

    const {
      month,
      selected,
      select,
    } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      let key = String(date.format("MMMM DD"))
      days.push(
        <Day
          key={key}
          day={day}
          selected={selected}
          select={select}
          selectedArray={this.props.selectedArray}
        />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div key={days[0]}>
        {days}
        <style jsx>{`
          div {
            display: grid;
            text-align: center;
            align-items: center;
            padding: 0 1em;
            grid-auto-flow: column;
            grid-template-rows: 2.3em;
            background: transparent;
            grid-template-columns: repeat(7, 1fr);
          }
        `}</style>
      </div>
    );
  }

}

class Day extends React.Component {
  isMultiple = () => {
    let {
      selected,
      day: { date },
    } = this.props

    if(selected.length != undefined) {
      if(date.isSame(selected[0])) {
        return " selected"
      }
      else if (date.isSame(selected[1])) {
        return " selected"
      }
      else {
        return ""
      }
    }
    else {
      return date.isSame(selected) ? " selected" : ""
    }
  }
  render() {
    let {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number
      },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className= {
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month") +
          (this.isMultiple())
        }
        onClick={()=>{
          select(day);
        }}>
        {number}
        <style jsx>{`
          span {
            cursor: pointer;
            font-size: 1.2em;
            color: var(--bk-dark);
          }
          .today {
            color: var(--bk-light);
          }
          .selected {
            transition: .5s;
            height: 1.7em;
            width: 1.7em;
            display: grid;
            font-size: 1.4em;
            border-radius: 100%;
            align-content: center;
            justify-self: center;
            color: var(--white);
            background: var(--bk-light);
          }
          .different-month {
            color: var(--gray)
          }
        `}</style>
      </span>
    );
  }
}
