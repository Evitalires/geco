import css from 'styled-jsx/css'

export const stylesButton = css`
  .ButtonClosePrint {
    top: 0;
    left: 100%;
    color: #788895;
    background: white;
    position: sticky;
  }
  .ButtonClosePrint:hover {
    color: white;
    background: #182C39;
  }
  .ButtonPrintModal {
    position: fixed;
    bottom: 10%;
  }
  button {
    color: #788895;
    font-size: 24px;
    padding: 8px 16px;
    background: #182C39;
    outline: none;
    border: none;
  }
  button:hover {
    color: white;
    transition: .5s;
  }
`
