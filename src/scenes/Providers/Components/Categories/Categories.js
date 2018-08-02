import React, { Component } from 'react'
import Triangle from '../../../../components/Icons/triangle'
import Add from '../../../../components/Icons/Add'

let catego = [
  {
    name: 'Lacteos',
    products: [
      {
        "id": "1251245670",
        "quantity": "1",
        "name": "Cerveza Sol 320ml",
        "price": "3000",
        "costo": "2500",
        "inventario": "34"
      },
      {
        "id": "1412490769",
        "quantity": "1",
        "name": "Leche Entera Colanta 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "1412490768",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "12234565056",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 1 litro",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      },
      {
        "id": "56012304504",
        "quantity": "1",
        "name": "Packa de leche Alquería Megalitro 6 unidades",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      }
    ]
  },
  {
    name: 'Dulcería',
    products: [
      {
        "id": "1251245670",
        "quantity": "1",
        "name": "Cerveza Sol 320ml",
        "price": "3000",
        "costo": "2500",
        "inventario": "34"
      },
      {
        "id": "1412490769",
        "quantity": "1",
        "name": "Leche Entera Colanta 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "1412490768",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "12234565056",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 1 litro",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      },
      {
        "id": "56012304504",
        "quantity": "1",
        "name": "Packa de leche Alquería Megalitro 6 unidades",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      }
    ]
  },
  {
    name: 'Licores',
    products: [
      {
        "id": "1251245670",
        "quantity": "1",
        "name": "Cerveza Sol 320ml",
        "price": "3000",
        "costo": "2500",
        "inventario": "34"
      },
      {
        "id": "1412490769",
        "quantity": "1",
        "name": "Leche Entera Colanta 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "1412490768",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "12234565056",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 1 litro",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      },
      {
        "id": "56012304504",
        "quantity": "1",
        "name": "Packa de leche Alquería Megalitro 6 unidades",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      }
    ]
  },
  {
    name: 'Carnicos',
    products: [
      {
        "id": "1251245670",
        "quantity": "1",
        "name": "Cerveza Sol 320ml",
        "price": "3000",
        "costo": "2500",
        "inventario": "34"
      },
      {
        "id": "1412490769",
        "quantity": "1",
        "name": "Leche Entera Colanta 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "1412490768",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 900ml",
        "price": "2000",
        "costo": "1800",
        "inventario": "10"
      },
      {
        "id": "12234565056",
        "quantity": "1",
        "name": "Leche Entera Alquería Megalitro 1 litro",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      },
      {
        "id": "56012304504",
        "quantity": "1",
        "name": "Packa de leche Alquería Megalitro 6 unidades",
        "price": "3000",
        "costo": "2500",
        "inventario": "10"
      }
    ]
  }
]

class Category extends Component {
  state = {
    name: this.props.name,
    products: this.props.products,
    showProducts: false,
  }

  showProducts = () => {
    console.log('Debería mostrar lo que hay dentro');
    this.setState({
      showProducts: !this.state.showProducts
    })
  }

  render() {
    let {
      name,
      products,
      showProducts,
    } = this.state
    return (
      <ul>
        <h2>
          <span>{name}</span>
          <span>({products.length})</span>
          <Triangle
            size={15}
            color='var(--bk-light)'
            handleClick={this.showProducts}
          />
        </h2>
        {
          showProducts && products.map((el, key) => {
              return(
                <li key={key}>
                  <span>el.name</span>
                  <Add
                    size='1.2em'
                    c_fill='transparent'
                    c_stroke='var(--bk-light)'
                    p_stroke='var(--bk-light)'
                    handleClick={ this.newProvider }
                  />
                </li>
              )
            }
          )
        }
        <style jsx>{`
          ul {
            display: grid;
            grid-template-rows: 2.5em;
            grid-gap: .3em;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          }
          ul h2 {
            display: grid;
            align-items: center;
            grid-auto-flow: column;
            background: var(--white);
            grid-template-columns: 1fr 1fr 3em;
          }
          ul h2 span {
            font-size: 1.1em;
            padding-left: 1em;
            color: var(--gray);
          }
          /* Element list */
          ul li {
            display: grid;
            grid-auto-flow: column;
            grid-template-rows: 2em;
            align-items: center;
            grid-template-columns: 1fr 3em;
          }
          ul li span {
            padding-left: 1em;
            opacity: .5;
            color: var(--gray);
            border-bottom: 1px solid rgba(72, 172, 236, .25);
          }
          ul li:hover span {
            transition: .3s;
            opacity: .7;
            padding-left: 1.2em;
            border-bottom: 1px solid var(--bk-light);
          }
          ul li span::first-letter {
            text-transform: uppercase;
          }
        `}</style>
      </ul>
    )
  }
}

class Categories extends Component {
  state= {
    categories: this.props.categories || catego
  }
  render(){
    let {
      categories
    } = this.state
    return(
      <section>
        {
          categories.map((el, key) => {
              return (
                <Category {...el} key={key}/>
              )

            }
          )
        }
        <div>
          <Add
            size='4em'
            c_fill='transparent'
            c_stroke='var(--bk-light)'
            p_stroke='var(--bk-light)'
            handleClick={ this.newProvider }
          />
        </div>
        <style jsx>{`
          section {
            display: grid;
            height: 100%;
            align-content: start;
            overflow: scroll;
            grid-gap: .4em;
            background: var(--white)
          }
          section div {
            bottom: 0;
            right: 0;
            position: absolute;
          }
        `}</style>
      </section>
    )
  }
}

export default Categories
