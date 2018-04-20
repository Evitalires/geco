import css from 'styled-jsx/css'

export const styleAdd = css`
  .AddButton {
    width: 50px;
    height: 50px;
    outline: none;
    display: flex;
    margin: 10px;
    justify-content: center;
    background: white;
    border-radius: 100%;
    box-shadow: 0px 2px 2px #778795;
  }
  .AddButton:hover {
    transition: .3s;
    transform: scale(1.05);
    box-shadow: 0px 4px 2px #778795;
  }
`
