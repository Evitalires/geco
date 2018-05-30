import React, { Component } from 'react'
import Field from '../../../components/Field/Field.js'
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
          <Field
            value='Hola, soy Field'
            label='Saludo'
          />
        <Text
          value=''
          label='Nombre'
          className='Form'
        />
        <Select
          options={['Exento', 'Gravado', 'Otro']}
          mainText={'Tipo de identificación'}
          selecText={'Selecciona una'}
          handleAnswer=''
        />
        <Numbers
          label='Número de identificación'
          text=''
          className='Form'
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

      </section>
    )
  }
}

export default RegisterProviders
