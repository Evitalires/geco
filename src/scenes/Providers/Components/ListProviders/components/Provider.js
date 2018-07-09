import React, { Component } from 'react'
import Finder from '../../../../../components/Finder/Finder'
import Add from '../../../../../components/Icons/Add'
import Edit from '../../../../../components/Icons/edit'
import IconCatalogue from '../../../../../components/Icons/catalogue'
import RegisterProviders from './../../RegisterProviders'
import { Modal } from '../../../../../components/Modal/Modal'

const ModalEdit = props => {
  let {
    opened,
    name,
    component
  } = props
  return (
    <>
      <Modal
        opened={ opened }
        modalClass='modalComplete'
        title={`Proveedor ${ name }`}
        closeText='X'
        closeClass='buttonClosePrint'
        trigger={
          <Edit
          color='var(--bk-light)'
          size='1.5em'
          handleClick={ () => props.handleClick() }
          />
        }
      >
        {
          <RegisterProviders { ...component }/>
        }
      </Modal>
    </>
  )
}
const ModalCatalogue = props => {
  let {
    opened,
    name,
    products,
  } = props
  return (
    <>
      <Modal
        opened={ opened }
        modalClass='modalComplete'
        closeText='X'
        closeClass='buttonClosePrint'
        title={`Proveedor ${ name }`}
        tA={ ' center '}
        mhb={'var(--white)'}
        trigger={
          <IconCatalogue
            color='var(--bk-light)'
            size='2em'
            handleClick={ () => props.handleClick() }
          />
        }
      >
        {
          <>
            <Finder
              placeholder='Buscar'
            />
            <section>
              {
                props.products.map( (el, key) => (
                  <div key={ key }>
                    <span>{ el }</span>
                    <Add
                      size='1.5em'
                      c_stroke='var(--bk-light)'
                      c_fill='transparent'
                      p_stroke='var(--bk-light)'
                      handleClick={ this.newProvider }
                    />
                    <style jsx>{`
                      div {
                        display: grid;
                        padding: 0em 1em;
                        align-items: center;
                        align-content: center;
                        min-height: 2em;
                        grid-template-columns: 1fr 2em;
                        border-bottom: 1px solid var(--gray);
                      }
                      div span {
                        font-size: 1em;
                        color: var(--gray);
                      }
                      div span::first-letter {
                        text-transform: uppercase;
                      }
                    `}</style>
                  </div>
                ))
              }
            </section>
          </>
        }
      </Modal>
    </>
  )
}

class Provider extends Component {
  state = {
    openModalEdit: false,
    openModalCatalogue: false,
    name: this.props.name,
    products: ['Sopa', 'Pasta', 'leche'],

  }
  edit = () => {
    console.log('Abriendo Modal para editar');
    this.setState({
      openModalEdit: true,
      openModalCatalogue: false,
    })
  }
  catalogue = () => {
    console.log('Abriendo Modal para consultar catalogo');
    this.setState({
      openModalCatalogue: true,
      openModalEdit: false
    })
  }
  modal = () => {
    console.log('Click en el modal');
  }
  render() {
    return (
      <article>
        <span>{this.state.name}</span>
        <ModalEdit
          opened={ this.state.openModalEdit }
          name={ this.state.name }
          component={ this }
          handleClick={ this.edit }
        />
        <ModalCatalogue
          opened={ this.state.openModalCatalogue }
          name={ this.state.name }
          handleClick={ this.catalogue }
          products={ this.state.products }
        />

        <style jsx>{`
          article {
            display: grid;
            align-items: center;
            padding-left: 1em;
            grid-auto-flow: column;
            grid-template-rows: 3em;
            grid-template-columns: 1fr 3em 3em;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          }
          span {
            font-size: 1.2em;
            color: var(--gray);
          }
        `}</style>
      </article>
    )
  }
}

export default Provider
