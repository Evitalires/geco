import css from 'styled-jsx/css'

export const Fieldstyle = css`
  div {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 4px;
  }
  form {
    display: flex;
    transition: .8s;
    flex-direction: column;
    align-items: left;
    border-right: 2px solid #788895
  }
  form.Id {
    width: 24px;
  }
  label {
    opacity: 0;
    color: #778795;
    display:block;
    width: auto;
    height: 24px;
    text-align:right;
    font-size: 16px;
    text-transform: uppercase;
    font-family: arial;
  }
  label.Id {
    height: 24px;
    font-size: 20px;
  }
  input {
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid transparent;
    color: black;
    height: 24px;
    font-size: 16px;
    outline: none;
    font-family: arial;
    background: transparent;
  }
  input.Id {
    width: 24px;
    font-size: 20px;
    color: #788895;
    text-transform: uppercase;
  }
  p {
    opacity: 0;
    margin: 0;
    height: 24px;
    width: 24px;
    border: none;
    overflow: hidden;
    background: #c8d2da;
  }
  .moveError {
    animation: moveError forwards 1s;
  }
  .moveUp {
    animation: moveUp forwards 1s;
  }
  .moveDown {
    animation: moveDown forwards 1s;
  }
  .moveLabel {
    animation: appear forwards .5s;
  }
  .unMoveLabel {
    animation: dissapear forwards .5s;
  }
  .noBorderForm {
    animation: reduce forwards .4s ease-out;
  }
  .borderForm {
    animation: enlarge forwards .4s ease-out;
  }
  @keyframes enlarge {
    from {
      border-right: 1px solid #C8D2D9;
    }
    to {
      border-right: 2px solid #788895;
    }
  }
  @keyframes reduce {
    from {
      border-right: 2px solid #788895;
    }
    to {
      border-right: 1px solid #C8D2D9;
    }
  }
  @keyframes dissapear {
    from {
      opacity: 0;
      color: #48ACEC;
      transform: translateY(0px);
    }
    1% {
      opacity: 0;
      color: #C8D2D9;
    }
    to {
      opacity: 1;
      color: #778795;
      transform: translateY(24px);
    }
  }
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(19px);
    }
    1% {
      opacity: 1;
      color: #48ACEC;
    }
    to {
      opacity: 1;
      color: #48ACEC;
      transform: translateY(0px);
    }
  }
  @keyframes moveDown {
    from {
      width: 150px;
      color: #C8D2D9;
      font-size: 16px;
      border-bottom: 1px solid #48ACEC;
      transform: translateY(-22px) translateX(30px);
    }
    25% {
      opacity: 1;
      width: 0px;
      font-size: 16px;
      border-bottom : 1px solid #C8D2D9;
      transform: translateY(-22px) translateX(30px);
    }
    50% {
      opacity: 0;
      width: 0px;
      color: #C8D2D9;
      transform: translateY(-22px);
    }
    to {
      opacity: 0;
      width: 24px;
      color: gray;
      font-size: 20px;
      transform: translateY(0px);
      border-bottom : 1px solid #C8D2D9;
    }
  }
  @keyframes moveError {
    from {
      opacity: 0;
      transform: translateY(0px);
    }
    50% {
      opacity: 0;
      width: 150px;
      transform: translateY(-44px) translateX(30px);
    }
    75% {
      opacity: 1;
      width: 150px;
      transform: translateY(-24px) translateX(30px);
    }
    to {
      opacity: 1;
      width: 150px;
      color: #ec485b;
      transform: translateY(-24px) translateX(30px);
    }
  }
  @keyframes moveUp {
    from {
      opacity: 0;
      width: 24px;
      font-size: 20px;
      transform: translateY(0px);
      border-bottom : 1px solid #C8D2D9;
    }
    50% {
      opacity: 0;
      transform: translateY(-24px);
      width: 0px;
    }
    75% {
      transform: translateY(-24px) translateX(30px);
      font-size: 16px;
      opacity: 1;
      width: 0px;
      border-bottom : 1px solid #C8D2D9;
    }
    to {
      width: 150px;
      color: black;
      font-size: 16px;
      border-bottom: 1px solid #48ACEC;
      transform: translateY(-24px) translateX(30px);
    }
  }
`
