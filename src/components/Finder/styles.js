import css from 'styled-jsx/css'

export const Finder = css`
  div {
    width: 100%;
  }
  form {
    width: 100%;
    height: 60px;
  }
  input {
    margin: 0px 20px;
    padding: 0;
    width: 100%;
    height: 24px;
    outline: none;
    font-family: arial;
    background: transparent;
    font-size: 24px;
    color: #788895;
    border: 1px solid transparent
  }
  .checkFinderDiv {
    background: #164461;
    padding-bottom: 8px;
  }
  .checkFinderForm {
    display: flex;
    align-items: center;
    background: #164461;
  }
  .checkFinderDiv div.Product {
    background-color: red !important;
    margin-top: 0px;
  }
  .checkFinderInput {
    width: 90%;
    color: white;
    padding: 8px 0px 8px 16px;
    border-bottom: 1px solid #788895
  }
  .checkFinderInput:focus {
    transition: .3s;
    border-bottom: 1px solid #48ACEC;
  }
`
