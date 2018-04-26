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
  .finderChange * {
    height: 35px;
    background: #164461;
  }
  .finderChange form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
  }
  .finderChange form p {
    display: none;
  }
  .finderChange form label,
  .finderChange form input {
    color: #778795;
    font-size: 30px;
    opacity: 1;
    text-align: left;
    font-weight: bold;
    font-family: serif;
    margin: 0px 40px 0px 40px;
  }
  .finderChange form input {
    width: 55%;
    text-align:right;
    margin-left: 0px;
    border-bottom: 1px solid white;
  }
  .finderChange form input::placeholder {
    color: #778795;
  }
  .finderChange form input:hover,
  .finderChange form input:hover::placeholder {
    color: white;
    transition: .5s;
    border-bottom: 1px solid #48ACEC;
  }
  .finderChange form input:focus {
    color: white;
    transition: 0s;
    font-size: 40px;
    border-bottom: 1px solid #48ACEC;
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
