import React, { Component } from 'react'
import IconCalendar from '../Icons/calendar'
import moment from 'moment'


class Calendario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selected: moment().startOf('day')
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next() {
    const {
      month,
    } = this.state;

    this.setState({
      month: month.add(1,'month'),
    });
  }

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone(),
    });
  }

  renderWeeks() {
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
          select={(day)=>this.select(day)}
          selected={selected} />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  renderMonthLabel() {
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
            grid-template-columns: 25px 1fr 25px;
            border: 1px solid var(--bk-light);
            grid-template-areas:  "header header header"
                                  ".      weeks        ."
          }
          .header {
            display: grid;
            grid-area: header;
            align-items: center;
            grid-template-rows: 3em 1.5em;
            background: var(--white);
          }
          .month {
            height: 100%;
            display: grid;
            align-content: center;
            justify-items: center;
            grid-auto-flow: column;
            grid-template-columns: 50px 1fr 50px;
          }
          .month i {
            font-weight: bold;
            cursor: pointer;
            font-size: 1.5em;
            color: (--bk-black);
            color: var(--bk-light);
          }
          .weeks {
            grid-area: weeks;
          }
        `}</style>
      </section>
    );
  }
}

class DayNames extends Component {
  state = {
    selected: moment().locale('es').format("dddd"),
    days: ['dom', 'lun', 'mar', 'miér', 'jue', 'vie', 'sáb']
  }
  handleClick = event => {
    let weekday = event.target.innerText.toLocaleLowerCase()
    if(this.state.selected.search(weekday) != 0) {
      this.setState({
        selected: weekday,
      })
    }
  }
  render() {
    let { selected } = this.state
    return (
      <div className="day-names">
        {
          this.state.days.map((day, key) => (
            <span
              key={day + key}
              className = {
                `day ${(selected.search(day) == 0) ? ' selected' : ''}`
              }
              onClick={this.handleClick}
              >
              {day}
            </span>
          ))
        }
        <style jsx>{`
          div {
            display: grid;
            text-align: center;
            grid-auto-flow: column;
            grid-template-columns: repeat(7, 1fr);
          }
          span {
            cursor: pointer;
            color: var(--gray);
          }
          span::first-letter {
            text-transform: capitalize;
          }
          .selected {
            transition: .5s;
            color: var(--white);
            background: var(--bk-light);
            border-radius: 0px 0px .5em .5em;
          }
        `}</style>
      </div>
        );
  }
}

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
          select={select}/>
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
  render() {
    const {
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
          (date.isSame(selected) ? " selected" : "")
        }
        onClick={()=>select(day)}>
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
///

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
    console.log(date);
  }
  render() {
    return (
      <article>
        <p>Descripción</p>
        <p>Fecha</p>
        <IconCalendar
          size='24px'
          color='var(--bk-light)'
          handleClick={this.handleClick}
        />
        {
          (this.state.calendar)&&
          <div className='box'>
            <Calendario/>
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
