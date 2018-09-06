import React, { Component, Fragment } from 'react'
import Modal  from '../../../../components/Modal/Modal'
import Button from '../../../../components/Button/Button'
import Finder from '../../../../components/Finder/Finder'
import Add    from '../../../../components/Icons/Add'
import Edit from  '../../../../components/Icons/edit'

class FindProducts extends Component {
  state={
    FindProducts: false,
    products: ["1", "2", "3", "4", "5"]
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
  foundProduct = () => {
    return(
      <article>
        <p>products</p>
        <Add
          size='1.5em'
          c_fill='var(--white)'
          c_stroke='var(--bk-light)'
          p_stroke='var(--bk-light)'
        />
        <Edit
          size='1.5em'
          color='var(--bk-light)'
        />
        <style jsx>{`
          article {
            display: grid;
            transition: .3s;
            margin: .5em .5em;
            padding-bottom: .3em;
            grid-auto-flow: column;
            border-bottom: 1px solid var(--gray);
            grid-template-columns: 1fr 2.5em 2.5em;
          }
          article:hover {
            margin: .5em 0em;
            padding: 0 .5em .3em .5em;
            border-bottom: 1px solid var(--bk-light)
          }
          article:hover p {
            color: var(--bk-dark);
          }
          article p {
            margin: 0;
            font-size: 1em;
            color: var(--gray);
          }
          article p::first-letter {
            text-transform: uppercase;
          }
        `}</style>
      </article>
    )
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
        headerTitle='Categoría'
        headerTextAlign='center'
        headerPadding='.5em 0 0 0'
        closerPadding='0 .5em 0 0'
        header={
          <Finder
            value=''
            placeholder='Buscar productos'
            background='var(--white)'
            placeholderColor='var(--light-gray)'
            columnEnd='3'
            columnStart='1'
          />
        }

        body={
          this.state.products.map(el => {
            return(this.foundProduct())
          })
        }
        footerBackground='var(--bk-dark)'
        footerAutoFlow='column'
        footerJustifyContent='space-evenly'
        footer={
          <>
            <Button
              text='Guardar'
              className='border shadow'
              handleClick={this.FindProducts}
            />
            <Button
              text='Guardar todos'
              className='border shadow'
              color='var(--white)'
              colorBorder='var(--white)'
              handleClick={this.FindProducts}
            />
          </>
        }
      />
    )
  }
}

export default FindProducts
