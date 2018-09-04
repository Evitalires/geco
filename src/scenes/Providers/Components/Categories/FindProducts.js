import React, { Component } from 'react'
import Modal  from '../../../../components/Modal/Modal'
import Button from '../../../../components/Button/Button'
import Finder from '../../../../components/Finder/Finder'

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
  close = () => {
    let parent = this.props.parent
    parent.setState({
      modalNameNewCategory: false
    })
  }
  render(){
    return(
      <Modal
        className='Complete'
        opened={this.state.FindProducts}
        overlayBackground={false}
        handleClose={this.close}
        trigger={
          <Button
            text='Guardar'
            className='light shadow'
            handleClick={this.FindProducts}
          />
        }
        headerTitle={'Categoría'}
        headerTextAlign='center'
        header={
          <Finder
            placeholder='Buscar productos'
            inputColor='var(--white)'
            placeholderColor='var(--light-gray)'
          />
        }

        body={
          <section>
            <p>products</p>
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

export default FindProducts
