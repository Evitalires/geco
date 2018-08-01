import React, { Component } from 'react'

class Button extends Component {
  state = {
    text: this.props.text,
    textColor: this.props.textColor,
    background: this.props.background,
    ellipsis: this.props.ellipsis,
    textColorHover: this.props.textColorHover,
    padding: this.props.padding,
    className: this.props.className,
    justifySelf: this.props.justifySelf,
    alignSelf: this.props.alignSelf
  }
  handleClick = event => {
    this.props.handleClick && this.props.handleClick()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({textInput: nextProps.textInput})
  }
  render() {
    let {
      text,
      textColor,
      background,
      ellipsis,
      textColorHover,
      className,
      padding,
      justifySelf,
      alignSelf,
    } = this.state
    return(
        <button
          onClick={this.handleClick}
          className={this.state.className}
        >
          { text }
          <style jsx>{`
            button {
              border: none;
              outline: none;
              max-height: 2em;
              width: max-content;
              font-size: 1.2em;
              padding: ${padding ? padding : '.5em 1em' };
              color: ${ textColor ? textColor : 'var(--gray)'};
              background: ${ background ?  background : 'transparent' } ;
              text-overflow: ${ ellipsis ? 'ellipsis' : 'inherit' };
              overflow: ${ ellipsis ? ' hidden ' : ' visible '};
              ${ justifySelf && `justify-self :  ${ justifySelf }`};
              ${ alignSelf && `align-self :  ${ alignSelf }`};
            }
            button:hover {
              cursor: pointer;
              color: ${ textColorHover ? textColorHover : 'var(--white)'  };
            }
          `}</style>
        </button>
    )
  }
}

export default Button
