import React, { Component } from 'react'
import Modal  from '../../../../components/Modal/Modal'
import Add from '../../../../components/Icons/Add'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'

class FindProducts extends Component {
  state={
    FindProducts: false,

  }
  FindProducts = () => {
    this.setState({
      FindProducts: true
    });
    this.props.onClick && this.props.onClick()
  }
  render(){
    return(
      <Modal
        closerText='X'
        className='modalBottom'
        opened={this.state.FindProducts}
        trigger={
          <Button
            text='Guardar'
            className='light shadow'
            handleClick={this.FindProducts}
          />
        }
        headerTitle={'Buscando productos para la nueva categoria'}
        headerTextAlign='center'

        body={
          <section>
            <p>Buscador</p>
            <p>Productos</p>
          </section>
        }
        footer={
          <section>
            <p>Boton para guardar todos</p>
            <p>Boton para guardar seleccionados</p>
          </section>
        }
        footerJustifyContent='center'
      />
    )
  }
}

class NewCategory extends Component {
  state ={
    modalNameNewCategory: false,
    NameNewCategory: '',
    openNewCategory: false,
  }
  open = () => {
    this.setState({
      modalNameNewCategory: true
    })
  }
  close = () => {
    this.setState({
      modalNameNewCategory: false
    })
  }
  NameNewCategory = text => {
    console.log('Actualizando nombre');
    this.setState({  NameNewCategory: text })
  }
  render() {
    let {
      NameNewCategory
    } = this.state
    return(
      <Modal
        closerText='X'
        className='modalBottom'
        opened={this.state.modalNameNewCategory}
        trigger={
          <Add
            size='4em'
            c_fill='var(--white)'
            c_stroke='var(--bk-light)'
            p_stroke='var(--bk-light)'
            handleClick={ this.open }
            position='absolute'
            bottom='0'
            right='0'
            justifyContent='right'
          />
        }
        headerTitle={'Nueva Categoría'}
        headerTextAlign='center'

        body={
          <Input
            label='Nombre'
            onChange={this.NameNewCategory}
            value={NameNewCategory}
            focus={true}
          />
        }
        footer={
          <FindProducts
            onClick={this.close}
          />
        }
        footerJustifyContent='center'

      />
    )
  }
}
export default NewCategory
