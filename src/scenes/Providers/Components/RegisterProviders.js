import React, { Component } from 'react'
import Text from '../../../components/Form/Text'
import Numbers from '../../../components/Form/Numbers'
import Select from '../../../components/Select/Select'

class RegisterProviders extends Component {
  state = {

  }
  render() {
    return (
      <section>
        <Text
          class=''
          labelText='Nombre'
          inputText='Input normal'
          inputPlaceholder='Normal'
        />
        <Text
          class='Form'
          labelText='Input para Formularios'
          inputText='Input para formularios'
          inputPlaceholder='Formularios'
        >
          <span>Hola</span>
          <span>Adiós</span>
        </Text>
        <Text
          class='Finder'
          labelText='Buscador'
          inputText='Buscador'
          inputPlaceholder='Buscador'
        >
          <span>Hola</span>
          <span>Adiós</span>
        </Text>
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Tipo de identificación'}
          selecText={'Selecciona una'}
          handleAnswer=''
        />
        <Numbers
          labelText='Número de identificación'
          inputText=''
          inputPlaceHolder='Teléfono'
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Razón social'}
          selecText={'Selecciona una'}
          handleAnswer=''
        />
        <Numbers
          labelText='Celular'
          inputText=''
          inputPlaceHolder='Teléfono'
        />
        <Numbers
          labelText='Teléfono'
          inputText=''
          inputPlaceHolder='Teléfono'
        />
        <Text
          labelText='Correo electronico'
          inputText=''
          inputType='mail'
          inputPlaceHolder='mail'
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Método de pago'}
          selecText={'Selecciona uno'}
          handleAnswer=''
        />

      </section>
    )
  }
}

export default RegisterProviders
