import React, { Component } from 'react'

class Button extends Component {
  state = {
    //Primary props
    text: this.props.text,
    className: this.props.className,
    colorPrimary: this.props.colorPrimary,
    colorSecondary: this.props.colorSecondary,
    //style props
    overflow: this.props.overflow,
    textOverflow: this.props.textOverflow,
    padding: this.props.padding,
    justifySelf: this.props.justifySelf,
    alignSelf: this.props.alignSelf,
    gridColumnEnd: this.props.gridColumnEnd,
    //position props
    position: this.props.position,
    top: this.props.top,
    left: this.props.left,
    right: this.props.right,
    bottom: this.props.bottom,
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text})
  }
  render() {
    let {
      text,
      className,
      colorPrimary,
      colorSecondary,
      //style props
      overflow,
      textOverflow,
      padding,
      justifySelf,
      alignSelf,
      gridColumnEnd,
      //position props
      position,
      top,
      left,
      right,
      bottom,
    } = this.state
    return(
        <button
          onClick={this.handleClick}
          className={this.state.className}
        >
          { text }
          <style jsx>{`
            button {
              outline: none;
              font-size: 1.2em;
              color: var(--gray);
              border: 1px solid transparent;
              transition: .3s;
              letter-spacing: .07em;
              position: ${position};
              top: ${top};
              left: ${left};
              right: ${right};
              bottom: ${bottom};
              padding: ${padding  || '.5em 1em' };
              background: transparent;
              text-overflow: ${ textOverflow || 'inherit' };
              overflow: ${ overflow || ' visible '};
              ${ justifySelf && `justify-self :  ${ justifySelf }`};
              ${ alignSelf && `align-self :  ${ alignSelf }`};
              ${ gridColumnEnd && `grid-column-end : ${gridColumnEnd}` }
            }
            button:hover {
              cursor: pointer;
            }
            button:hover {
              color: var(--bk-light);
            }
            button.border:hover {
              border: 1px solid var(--bk-light);
            }
            button.shadow:hover {
              box-shadow: var(--shadow);
            }
            button.light {
              color: var(--white);
              background: var(--bk-light);
            }
            button.light:hover {
              color: var(--white);
              transform: scale(1.1);
            }
            button.dark {
              color: var(--gray);
              background: var(--bk-dark);
            }
            button.dark:hover {
              color: var(--white);
            }
            button.dark.border {
              border: 1px solid var(--gray);
            }
            button.dark.border {
              border: 1px solid var(--white);
            }

          `}</style>
        </button>
    )
  }
}

export default Button
