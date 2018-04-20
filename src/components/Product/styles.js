import css from 'styled-jsx/css'

export const styleProduct = css`
  .AddProduct {
    animation: trasladar forwards 5s;
  }
  @keyframes trasladar {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(50px);
    }
  }
  .Product {
    height: 70px;
    width: 90%;
    min-width: 300px;
    margin: 8px auto;
    display: flex;
    padding: 8px 8px;
    background-color: #C8D2D9;
  }
  .Product:hover {
    transition: .5s;
    background: #E0EDF3
  }
  .Product div form {
    border-right: 2px solid #788895;
    padding: 0 8px;
  }
  form {
    width: 180px;
    display: flex;
    flex-direction: column;
  }
  label {
    opacity: 0;
    color: #778795;
    display:block;
    width: auto;
    height: 24px;
    text-align:right;
    font-size: 20px;
    font-family: arial;
  }
  input {
    margin: 0;
    padding: 0;
    border: none;
    height: 24px;
    outline: none;
    font-family: arial;
    background: transparent;
    width: 180px;
    font-size: 20px;
    color: #788895;
    border-bottom: 1px solid transparent;
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
  input:focus {
    color: #164461;
    width: inherit;
  }
  .border {
    animation: activeBorder forwards 1s;
  }
  @keyframes activeBorder {
    from {
      border-bottom: 1px solid trasparent;
    }
    to {
      border-bottom: 1px solid #48ACEC;
    }
  }
`
