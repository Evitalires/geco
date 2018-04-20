import css from 'styled-jsx/css'

export const stylePrice = css`
  div {
    height: 100%;
  }
  input {
    text-align: center;
    width: 70px;
  }
  form, input, label, p {
    width: 70px;
  }
  input::before {
    content: "$";
    color: red;
    background-color: #FFBA10;
  }
`
