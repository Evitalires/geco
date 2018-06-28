import React, { Component } from 'react'
import Edit from '../../../components/Icons/edit'
import IconCatalogue from '../../../components/Icons/catalogue'
import Add from '../../../components/Icons/Add'

class Provider extends Component {
  state = {
    name: this.props.name
  }
  edit = () => {
    console.log('Abriendo Modal para editar');
  }
  catalogue = () => {
    console.log('Abriendo Modal para consultar catalogo');
  }
  render() {
    return (
      <article>
        <span>{this.state.name}</span>
        <Edit
          color='var(--bk-light)'
          size='1.5em'
          handleClick={this.edit}
        />
        <IconCatalogue
          color='var(--bk-light)'
          size='2em'
          handleClick={this.catalogue}
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

class ListProviders extends Component {
  state = {
    providers: this.props.providers || ['Quala', 'Rey', 'Postobon']
  }
  render() {
    let { providers } = this.state
    return(
      <section>
        {
          providers.map((el, key) => {
            return (
              <Provider
                key={key}
                name={el}
              />
            )
          })
        }
        <Add
          size='28'
          color='red'
          handleClick={this.openModal}
        />
        <style jsx>{`
          display: grid;
          grid-gap: .5em;
        `}</style>
      </section>
    )
  }
}

export default ListProviders
