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
    selectedDeliveryTwo: [{day: today.day, className: 'null'}]
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
    //separar los arrays
    let visited = result.filter(el => el.className === ' selectedVisit')
    let dely = delivery.filter(el => el.className === ' selectedDelivery')
        dely = dely.length > 1
              ? result.filter(
                (el, i, array) =>
                el.className === ' selectedDelivery'
                &&
                array[++i].className === ' selectedVisit'
              )
              : dely
    //Cambiando las clases
    result = result.map((day, key) => {
      let max = key > dely.length-1 ? dely.length-1 : key
      let distance = dely[max].index - visited[max].index

      if( day != dely[max].day &&
          day != visited[max].day &&
          day.index < dely[max].index &&
          day.index > visited[max].index &&
          day.className != ' selectedVisit'
        ){
        return day = {
          day: day.day,
          index: key,
          className: ' innerSelected'
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
    })
  }
  setDelivery = selected => {
    //Extrayendo los sin clase
    let deliveryEnd = selected.filter(
      el => el.className == ' ' ||  el.className == ' selectedDelivery' )
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
  }
  setDeliveryTwo = selected => {
    //Extrayendo los sin clase
    let deliveryEnd = selected.filter( el => el.className == ' ')
    deliveryEnd = this.editClass(deliveryEnd, ' selectedDelivery');
    this.setState({
      selectedDeliveryTwo: deliveryEnd
    })
  }
  render() {
    let {
      selectedVisit,
      selectedDelivery,
      selectedDeliveryTwo
     } = this.state
    return (
      <>
        Día de visita
        <DayNames
          receiveProps={true}
          selected={selectedVisit}
          handleClick={this.setVisit}
        />
        Día de entrega
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
      </>
    )
  }
}

export default AssignDay
