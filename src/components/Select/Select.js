import React from 'react'
import ListCheck from '../ListCheck/ListCheck'
import SelectBox from './components/SelectBox'

class Select extends React.Component {
  state = {
    hidden: true,
    options: this.props.options,
    mainText: this.props.mainText,
    selecText: this.props.selecText
  }
  handleClick = event => {
    setTimeout(() => {
      this.setState({hidden: !this.state.hidden})
    }, 300)
  }
  handleSelect = texto => {
    this.setState({
      selecText: texto
    })
  }
  render(){
    return (
      <article
        onClick={this.handleClick}
        >
          <h1>{this.state.mainText}</h1>
        {
          (this.state.hidden)
          ? <SelectBox
            text={this.state.selecText}
            className={(this.props.selecText != this.state.selecText) ? 'select': 'unSelect' }
            showIcon={true}/>
          : <React.Fragment>
              <SelectBox className='unSelect' showIcon={false}/>
              <section>
                <ListCheck
                  options={this.state.options}
                  select={this.state.selecText}
                  handleSelect={this.handleSelect}
                />
              </section>
              <SelectBox className='select' showIcon={true}/>
            </React.Fragment>
        }
        <style jsx>{`
          h1 {
            color: #788895;
            font-weight: 100;
          }
          article {
            padding-bottom: 24px;
            border-bottom: 1px solid #788895;
          }
          section {
            border: 1px solid #788895;
            border-top: none;
            padding: 0px 24px 48px 16px;
          }
        `}</style>
      </article>
    )
  }
}

export default Select
