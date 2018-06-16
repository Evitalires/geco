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
  setVisit = selected => {
    //Asignando clase para la semana de Visita
    let selVisit = this.editClass( selected, ' selected')
    //Asignando clase para la semana de Entrega
    let deliveryInit = this.editClass( selected, ' selectedVisit')

    this.setState({
      selectedVisit: selVisit,
      selectedDelivery: deliveryInit,
    })
  }
  setDelivery = selected => {
    //Extrayendo los sin clase
    let deliveryEnd = selected.filter( el => el.className == ' ')
    deliveryEnd = this.editClass(deliveryEnd, ' selectedDelivery')
    //Uniendo deliveryEnd con los que ya tienen clase
    let delivery = selected.filter(
      el => el.className == ' selectedVisit' ||  el.className == ' selected'
    )
    delivery = this.editClass( delivery, ' selectedVisit')
    delivery = delivery.concat(deliveryEnd);
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
