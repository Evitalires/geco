import React, { Component } from 'react'
import Button from '../../../../components/Button/Button'
import Triangle from '../../../../components/Icons/triangle'
import Add from '../../../../components/Icons/Add'
import Cross from '../../../../components/Icons/cross'
import Modal  from '../../../../components/Modal/Modal'
import Input from '../../../../components/Input/Input'
import NewCategory from './NewCategory'
import Category from './Category'


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



class Categories extends Component {
  state= {
    newCategory: false,
    categories: this.props.categories || catego,
  }
  newCategory = () => {
    this.setState({
      newCategory: true
    })
  }
  render(){
    let {
      categories
    } = this.state
    return(
      <section>
        <article>
          {
            categories.map((el, key) => {
                return <Category {...el} key={key}/>
              }
            )
          }
        </article>
        <NewCategory/>
        <style jsx>{`
          section {
            display: grid;
            height: 100%;
            background: var(--white);
            grid-template-rows: 1fr 4.2em;
          }
          section article {
            display: grid;
            grid-gap: .4em;
            overflow: scroll;
            align-content: start;
          }
          span {
            color: var(--bk-light);
            font-size: 1em;
          }
        `}</style>
      </section>
    )
  }
}

export default Categories
