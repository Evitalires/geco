import React, { Component } from 'react'
import Modal  from '../../../../components/Modal/Modal'
import Add from '../../../../components/Icons/Add'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import FindProducts from './FindProducts'



class NewCategory extends Component {
  state ={
    modalNameNewCategory: false,
    NameNewCategory: '',
  }
  open = () => {
    this.setState({
      modalNameNewCategory: true
    })
  }
  close = () => {
    this.setState({
      modalNameNewCategory: false,
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
        className='Bottom'
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
            parent={this}
          />
        }
        footerJustifyContent='center'
      />
    )
  }
}
export default NewCategory
