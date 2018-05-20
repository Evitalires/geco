import React, {Component, Fragment} from 'react'

class Tab extends Component {
  state = {
    options: this.props.options,
    selected: this.props.selected
  }
  handleClick = event => {
    let text = event.target.innerText
    this.setState({
      selected: text
    })
  }
  isSelected = text => {
    if(text == this.state.selected) {
      return 'tabActive'
    }
    else {
      return 'tabUnactive'
    }
  }
  render() {
    let children = this.props.children
    return (
      <Fragment>
        <nav>
          {
            children.map((el, position) => (
              <h1
                key={position}
                onClick={ this.handleClick }
                className={ this.isSelected(children[position].props.title) }
                >
                { children[position].props.title }
              </h1>
            ))
          }
          <style jsx>{`
            nav {
              display: grid;
              position: relative;
              width: 100%;
              height: 50px;
              background: #E0EDF3;
              text-align: center;
              align-content: center;
              grid-auto-flow: column;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            nav h1 {
              margin: 0px;
              height: 50px;
              line-height: 50px;
            }
            .tabActive {
              color: #48ACEC;
              box-shadow: inset 0px -4px 0px #48ACEC;
            }
            .tabUnactive {
              color: #ABB7BF;
            }
            .tabUnactive:hover {
              transition: .3s;
              box-shadow: inset 0px -4px 0px #ABB7BF;
            }
          `}</style>
        </nav>
        {
          children.map((el, position) => (
            (children[position].props.title == this.state.selected)
            && children[position]
          ))
        }
      </Fragment>
    )
  }
}
export default Tab
