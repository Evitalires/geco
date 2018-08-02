import React, { Component } from 'react'
import Text from '../../../components/Form/Text'
import Numbers from '../../../components/Form/Numbers'
import Select from '../../../components/Select/Select'
import AssignDay from '../../../components/AssignDay/AssignDay'
import Catalogue from '../../../components/Catalogue/Catalogue'
import Button from '../../../components/Button/Button'

class RegisterProviders extends Component {
  state = {
    name: this.props.name || '',
    typeDocumentation: this.props.typeDocumentation || '',
    numberId: this.props.numberId || '',
    reasonSocial: this.props.reasonSocial || '',
    payMethod: this.props.payMethod || '',
    cellPhone: this.props.cellPhone ||'',
    number: this.props.number || '',
    mail: this.props.mail || '',
    direction: this.props.direction || '',
    daysVisited: this.props.daysVisited || [],
    daysDelivery: this.props.daysDelivery || [],
    newProvider: this.props.newProvider || false,
  }
  AssignDay = (visited, delivery) => {
    this.setState({
      daysVisited: visited,
      daysDelivery: delivery
    })
  }
  saveName = text => {
    this.setState({name: text});
  }
  typeDocumentation = text => {
    this.setState({ typeDocumentation: text })
  }
  numberId = number => {
    this.setState({ numberId: number })
  }
  reasonSocial = text => {
    this.setState({ reasonSocial: text })
  }
  payMethod = text => {
    this.setState({ payMethod: text })
  }
  cellPhone = number => {
    this.setState({ cellPhone: number })
  }
  phone = number => {
    this.setState({ phone: number })
  }
  mail = mail => {
    this.setState({ mail: mail })
  }
  direction = text => {
    this.setState({ direction: text})
  }
  saveProvider = event => {
    console.log('Guardando Datos');
    this.resetProvider()
  }
  resetProvider = () => {
    //Reseateando formulario
    this.setState({
      name: '',
      typeDocumentation: '',
      numberId: '',
      reasonSocial: '',
      payMethod: '',
      cellPhone: '',
      number: '',
      mail: '',
      direction: '',
      daysVisited: [],
      daysDelivery: [],
      newProvider: true
    })
  }
  newProvider = () => {
    this.setState({ newProvider: false })
  }
  render() {
    let {
      name,
      typeDocumentation,
      numberId,
      reasonSocial,
      payMethod,
      cellPhone,
      number,
      mail,
      direction,
      daysVisited,
      daysDelivery,
      newProvider
    } = this.state

    if(newProvider) {
      return (
        <section>
          <h1>¿Crear nuevo proveedor?</h1>
          <Button
            type='button'
            className='buttonLight'
            textInput='Sí'
            handleClick={this.newProvider}
          />
          <style jsx>{`
            section {
              display: grid;
              padding: 16px;
              grid-gap: 1em;
              min-height: 50vh;
              justify-content: center;
              grid-template-rows: 1fr 1fr;
            }
            h1 {
              margin: 0;
              display: grid;
              align-self: end;
              color: var(--gray);
              font-size: 1.2em;
              font-weight: normal;
            }
          `}</style>
        </section>
      )
    }
    else {
      return (
        <section>
          <Text
            value={ name }
            label='Nombre'
            handleBlur={this.saveName}
          />
          <Select
            options={['Cédula de Ciudadanía', 'NIT',  'Otro']}
            mainText={'Tipo de identificación'}
            selecText={ typeDocumentation || 'Selecciona una'}
            handleAnswer={this.typeDocumentation}
          />
          <Numbers
            value={ numberId }
            label='Número de identificación'
            handleBlur={this.numberId}
          />
          <Select
            options={['Exento', 'Gravado', 'Otro']}
            mainText={'Razón social'}
            selecText={ reasonSocial || 'Selecciona uno' }
            handleAnswer={this.reasonSocial}
          />
          <Select
            options={['Exento', 'Gravado', 'Otro']}
            mainText={'Método de pago'}
            selecText={ payMethod || 'Selecciona uno' }
            handleAnswer={this.payMethod}
          />
          <Numbers
            value={ cellPhone }
            label='Celular'
            handleBlur={this.cellPhone}
          />
          <Numbers
            value={ number }
            label='Teléfono'
            handleBlur={this.phone}
          />
          <Text
            value={ mail }
            label='Mail'
            handleBlur={this.mail}
          />
          <Text
            value={ direction }
            label='Dirección'
            handleBlur={this.direction}
          />
          <AssignDay
            assignDay={this.AssignDay}
          />
          <Catalogue/>
          <Button
            type='button'
            text={ 'Guardar' }
            className={'buttonLight'}
            handleClick={this.close}
            background='var(--bk-light)'
            textColor='var(--white)'
            justifySelf='center'
          />
          <style jsx>{`
            section {
              display: grid;
            }
          `}</style>
        </section>
      )
    }
  }
}

export default RegisterProviders
