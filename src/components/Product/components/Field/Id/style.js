import css from 'styled-jsx/css'

export const styleId = css`
  div {
    height: 100%;
  }
  form {
    width: 24px;
    padding-right: 6px;
  }
  label {
    text-transform: uppercase;
  }
  input {
    width: 24px;
    font-size: 20px;
    z-index: 10;
    text-transform: uppercase;
  }
  p {
    width: 24px;
  }
  .moveError {
    animation: moveError forwards 1s;
  }
  .moveUp {
    animation: moveUp forwards 1s;
  }
  .moveDown {
    animation: moveDown forwards .5s;
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
      border-right: 1px solid transparent
    }
    to {
      border-right: 2px solid #778795;
    }
  }
  @keyframes reduce {
    from {
      border-right: 1px solid #778795;
    }
    to {
      border-right: 1px solid transparent;
    }
  }
  @keyframes dissapear {
    from {
      opacity: 0;
      color: #48ACEC;
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
    5% {
      opacity: 0;
      color: #C8D2D9;
    }
    25% {
      opacity: 0;
      width: 0px;
      color: #C8D2D9;
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
      transform: translateY(0px);
    }
    50% {
      opacity: 0;
      width: 180px;
      transform: translateY(-44px) translateX(36px);
    }
    75% {
      opacity: 1;
      transform: translateY(-24px) translateX(36px);
    }
    to {
      opacity: 1;
      width: 180px;
      color: #ec485b;
      transform: translateY(-24px) translateX(36px);
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
      width: 0px;
      font-size: 16px;
      opacity: 1;
      border-bottom : 1px solid #C8D2D9;
      transform: translateY(-24px) translateX(36px);
    }
    to {
      width: 180px;
      color: #164461;
      font-size: 16px;
      border-bottom: 1px solid #48ACEC;
      transform: translateY(-24px) translateX(36px);
    }
  }
`
