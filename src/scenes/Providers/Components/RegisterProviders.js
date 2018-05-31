import React, { Component } from 'react'
import Text from '../../../components/Form/Text'
import Numbers from '../../../components/Form/Numbers'
import Select from '../../../components/Select/Select'
import Edit from '../../../components/Icons/edit'

class RegisterProviders extends Component {
  state = {

  }
  render() {
    return (
      <section>
        <Text
          value=''
          label='Nombre'
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Tipo de identificación'}
          selecText={'Selecciona una'}
          handleAnswer=''
        />
        <Numbers
          value=''
          label='Número de identificación'
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Razón social'}
          selecText={'Selecciona una'}
          handleAnswer=''
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Método de pago'}
          selecText={'Selecciona uno'}
          handleAnswer=''
        />
        <Numbers
          value=''
          label='Celular'
        />
        <Numbers
          value=''
          label='Teléfono'
        />
        <Text
          value=''
          label='Mail'
        />
        <Text
          value=''
          label='Dirección'
        />
        <Text
          value=''
          label='Dirección'
        />
        <Text
          value=''
          label='Método de pago'
        />
      </section>
    )
  }
}

export default RegisterProviders
