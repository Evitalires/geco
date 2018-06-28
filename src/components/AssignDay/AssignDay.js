import React, { Component } from 'react'
import DayNames from '../Calendar/components/DayNames'
import moment from 'moment'

const today = {
  day: moment().locale('es').format("ddd").split('').slice(0,3).join(''),
  className: ' selected',
}

class AssignDay extends Component {
  state = {
    selectedVisit: [today],
    days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    selectedDelivery: [{day: today.day, className: ' selectedVisit'}],
    selectedDeliveryTwo: [{day: today.day, className: ''}]
  }
  editClass = (array, className) => {
    return array.map( el => {
      return el = {
        day: el.day,
        index: el.index || 0,
        className: className
      }
    })
  }
  getClass = (selected, day) => {
    let today = selected.find(el => el.day === day)
    return (today != undefined ? today.className : ' ')
  }
  setRange = delivery => {
    let { selectedVisit, days } = this.state
    //Todos los días
    let result = days.map((day, key) => {
      return day = {
        day: day,
        index: key,
        className: this.getClass(delivery, day)
      }
    })

    //Cambiando las clases
    result = result.map((day, key, array) => {

      let previous = array[key == 0 ? 0 : key - 1];
          previous = previous != undefined ? previous : array[array.length -1];
      let next = array[key == 0 ? 0 : key + 1];
          next = next != undefined ? next : array[array.length -1];
      let visited =  array.find( el =>
        el.className == ' selectedVisit' && el.index < day.index
      );
      let delivery = array.find( el =>
        el.className == ' selectedDelivery' &&
        el.index > day.index
      );

      if (
        (
          (visited != undefined) && day.index > visited.index &&
          (delivery != undefined) && day.index < delivery.index &&
          day.className != ' selectedVisit' &&
          next.className != ' selectedVisit'
        )
        ||
        (
          previous.className == ' selectedVisit' &&
          day.className != ' selectedDelivery' &&
          next.className == ' selectedDelivery'
        )
        ||
        (
          previous.className == ' selectedVisit' &&
          day.className == ' selectedDelivery' &&
          next.className == ' selectedDelivery' &&
          day.day != next.day
        )
        ||
        (
          previous.className == ' innerSelected' &&
          day.className == ' selectedDelivery' &&
          next.className == ' selectedDelivery' &&
          next.index != day.index
        )
      ) {
        array[key] = {
            day: day.day,
            index: key,
            className: ' innerSelected'
          }
        return array[key]
      }
      if (
        next.className == ' selectedVisit' &&
        day.className == ' innerSelected' || day.className == ' ' &&
        previous.className == ' innerSelected'
      ) {
        return array[key] = {
          day: day.day,
          index: key,
          className: ' selectedDelivery'
        }
      }
      else { return day }
    })
    return result
  }
  setVisit = selected => {
    //Asignando clase para la semana de Visita
    let selectedVisit = this.editClass( selected, ' selected')
    //Asignando clase para la semana de Entrega
    let deliveryInit = this.editClass( selected, ' selectedVisit')

    this.setState({
      selectedVisit: selectedVisit,
      selectedDelivery: deliveryInit,
      selectedDeliveryTwo:[{day: today.day, className: ''}]
    })
  }

  setDelivery = (selected, pickDay) => {
    //Extrayendo los sin clase
    let deliveryEnd = selected.filter(
      el =>
      el.day == pickDay.day ||
      el.className == ' selectedDelivery'
    );
    deliveryEnd = this.editClass(deliveryEnd, ' selectedDelivery')

    //Uniendo deliveryEnd con los que ya tienen clase
    let delivery = selected.filter(
      el => el.className == ' selectedVisit' ||  el.className == ' selected'
    )
    delivery = this.editClass( delivery, ' selectedVisit')
    delivery = delivery.concat(deliveryEnd);

    //Remplazando clases según los grupos
    delivery = this.setRange(delivery)

    this.setState({
      selectedDelivery: delivery
    });

    setTimeout(() => this.assignDay(), 0)
  }

  setDeliveryTwo = (selected, pickDay) => {
    let { days, selectedDelivery } = this.state

    let visited = days.map((day, key) => {
      return day = {
        day: day,
        index: key,
        className: this.getClass(selectedDelivery, day)
      }
    });
    visited = visited.filter(
      el =>
      el.className == ' selectedVisit'
    );

    selectedDelivery = days.map((day, key) => {
      return day = {
        day: day,
        index: key,
        className: this.getClass(selectedDelivery, day)
      }
    });
    let delivery = selectedDelivery.filter(
      el =>
      el.className == ' selectedDelivery'
    );
    //Extrayendo los sin clase
    //pickDay.className = ' selectedDelivery'

    let result = days.map((day, key) => {
      return day = {
        day: day,
        index: key,
        className: ''
      }
    })

    if(visited.length != delivery.length) {
      //Editando selectedDeliveryTwo
      selected = result.map((el, key, array) => {
        if(el.day == pickDay.day) {
          return array[key] = {
            day: el.day,
            index: key,
            className: ' selectedDelivery'
          }
        }
        else if(el.index < pickDay.index) {
          return array[key] = {
            day: el.day,
            index: key,
            className: ' innerSelected'
          }
        }
        else { return el }
      });
      this.setState({
        selectedDeliveryTwo: selected
      })
      //editando selectedDelivery
      selectedDelivery = selectedDelivery.map((el, key, array) => {

        if(el.index > visited[visited.length -1].index) {
          return array[key] = {
            day: el.day,
            index: key,
            className: ' innerSelected'
          }
        }
        else { return el }
      })
      this.setState({
        selectedDelivery: selectedDelivery
      })
    }
    setTimeout(() => this.assignDay(), 0)
  }

  assignDay = () => {
    let {
      selectedDelivery,
      selectedDeliveryTwo
    } = this.state
    let visited = selectedDelivery.filter(
      el => el.className == ' selectedVisit'
    )
    let delivery = selectedDelivery.filter(
      el => el.className == ' selectedDelivery'
    )
    delivery = delivery.concat(selectedDeliveryTwo.filter(
      el => el.className == ' selectedDelivery'
    ));
    this.props.assignDay && this.props.assignDay(visited, delivery)
  }

  render() {
    let {
      selectedVisit,
      selectedDelivery,
      selectedDeliveryTwo
     } = this.state
    return (
      <section>
        <article>
          <p>Día de visita</p>
          <DayNames
            receiveProps={true}
            selected={selectedVisit}
            handleClick={this.setVisit}
          />
        </article>
        <article>
          <p>Día de entrega</p>
          <DayNames
            receiveProps={true}
            selected={selectedDelivery}
            handleClick={this.setDelivery}
          />
          <DayNames
            receiveProps={true}
            selected={selectedDeliveryTwo}
            handleClick={this.setDeliveryTwo}
          />
        </article>
        <style jsx>{`
          section {
            display: grid;
            grid-row-gap: 1em;
            grid-template-rows: auto;
          }
          article {
            display: grid;
            padding: 16px 0px;
            align-items: center;
            grid-row-gap: .5em;
            grid-template-rows: 1.2em 1.5em;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          }
          p {
            margin: 0px;
            font-size: 1.2em;
            color: var(--gray);
          }
          `}
        </style>
      </section>
    )
  }
}

export default AssignDay
