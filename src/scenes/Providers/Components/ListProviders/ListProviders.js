import React, { Component } from 'react'
import Provider from './components/Provider'
import Add from '../../../../components/Icons/Add'

class ListProviders extends Component {
  state = {
    providers: this.props.providers || ['Quala', 'Rey', 'Postobon']
  }
  newProvider = () => {
    console.log('Nos fuimos para Registrar');
    ( this.props.handleNewProvider ) && this.props.handleNewProvider();
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
            grid-gap: .5em;
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

export default ListProviders
