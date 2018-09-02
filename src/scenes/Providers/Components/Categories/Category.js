import React, { Component } from 'react'
import Triangle from '../../../../components/Icons/triangle'
import Cross from '../../../../components/Icons/cross'
import Button from '../../../../components/Button/Button'


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

export default Category
