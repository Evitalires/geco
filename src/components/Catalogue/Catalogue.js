import React, { Component } from 'react'
import IconCatalogue from '../Icons/catalogue'
/*
//La idea es que abra un Modal
 - El modal hará peticiones buscando
  1 => categorías
  2 => productos
 - Tendrá la opción de copiar las categorías que otros provedores tengan o sus producos
*/

class Catalogue extends Component {
  state={
    products:[]
  }

  openModal = event => {
    console.log('Abriendo modal...');
  }
  render() {
    return(
      <div>
        <span
        >
          Catalogo de productos
        </span>
        <IconCatalogue
          size='28'
          color='var(--bk-light)'
          handleClick={this.openModal}
        />
        <style jsx>{`
          div {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            grid-template-rows: 3.7em;
            grid-template-columns: 1fr 3em;
          }
          span {
            font-size: 1.2em;
            color: var(--gray);
          }
        `}</style>
      </div>
    )
  }
}

export default Catalogue
