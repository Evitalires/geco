import React, { Component } from 'react'
import Button from '../../../../components/Button/Button'
import Triangle from '../../../../components/Icons/triangle'
import Add from '../../../../components/Icons/Add'
import Cross from '../../../../components/Icons/cross'
import Modal  from '../../../../components/Modal/Modal'
import Input from '../../../../components/Input/Input'


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

class NewCategory extends Component {
  state = {
    opened: false
  }
  open =  () => {
    this.setState({
      opened: true
    })
  }
  render() {
    return(
      <Modal
        closerText='X'
        className='modalBottom'
        opened={this.state.opened}
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
          <span>acá va un input</span>
        }
        footer={
          <Button
            text='Guardar'
            className='light shadow'
          />
        }
        footerJustifyContent='center'

      />
    )
  }
}

class Category extends Component {
  state = {
    name: this.props.name,
    products: this.props.products,
    showProducts: false,
  }

  showProducts = () => {
    this.setState({
      showProducts: !this.state.showProducts,
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
        <section className='categoriesHeader'>
          <span>{name}</span>
          <span>({products.length})</span>
          <Triangle
            size={15}
            color='var(--light-gray)'
            handleClick={this.showProducts}
            colorHover='var(--bk-light)'
            optionsRotate={
              showProducts ? ["30deg", "90deg"] : ["90deg", "30deg"]
            }
          />
        </section>
        {
          showProducts &&  (
            <>
            <section className='categoriesBody'>
              {
                products.map((el, key) => {
                    return (
                      <li key={key}>
                        <span>el.name</span>
                        <Cross
                          size='.5em'
                          color='var(--light-gray)'
                          colorHover='var(--bk-light)'
                        />
                      </li>
                    )
                  }
                )
              }
            </section>
            <section className='categoriesFooter'>
              <Button
                text='Editar'
                textColor='var(--gray)'
                textColorHover='var(--bk-light)'
                className='buttonBorder'
                position='relative'
                left='1em'
              />
            </section>
            </>
          )
        }
        <style jsx>{`
          ul {
            display: grid;
            grid-gap: .3em;
            margin: 0 .5em;
            transition: .3s;
            grid-template-rows: 2.5em;
            border: 1px solid var(--light-gray);
            ${showProducts && `
              margin: 0;
              box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            `}
          }
          ul:hover {
            margin: 0;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          }
          ul .categoriesHeader {
            display: grid;
            align-items: center;
            grid-auto-flow: column;
            background: var(--white);
            grid-template-columns: 1fr 1fr 3em;
            border-bottom: ${showProducts && '1px solid var(--light-gray)'}
          }
          ul .categoriesHeader span {
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
            margin-left: .5em;
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
          /*  Categoríes Footer */
          ul .categoriesFooter {
            ${ showProducts && `
              max-height: 4em;
              display: grid;
              padding-right: 1em;
              padding-bottom: 1em;
              grid-auto-flow: column;
              justify-items: center;
            `}
          }
        `}</style>
      </ul>
    )
  }
}

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
          {/* //Pruebas */}
          <article>
            <span>
              Input para productos
            </span>
            <Input
              label='Label'
              value='Input'
              error='Error'
              placeholder='Adios'
              className='Product'
              active={true}
              unActive={true}
            />
            <span>
              Input para que cambia
            </span>
            <Input
              label='Label'
              value='Input'
              placeholder='Adios'
              active={true}
              unActive={true}
            />
            <span>
              Input para formularios
            </span>
            <Input
              label='Label'
              value='Input'
              error=''
              placeholder='Adios'
              active={true}
              unActive={true}
              className='Field'
            />
          </article>
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
