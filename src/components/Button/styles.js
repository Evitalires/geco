import css from 'styled-jsx/css'

export const stylesButton = css`
  input[type=button] {
    border: none;
    outline: none;
    color: #788895;
    overflow:hidden;
    max-height: 2em;
    font-size: 24px;
    background: transparent;
    text-overflow: ellipsis;
  }
  input[type=button]:hover {
    cursor: pointer;
    color: white;
  }
  .center {
    display: flex;
    margin: 0 auto;
  }
  .buttonGray {
    width: 130px;
    color: #788895;
    background: #C8D2D9;
    padding: 8px 24px;
  }
  .buttonGray:hover {
    color: #C8D2D9;
    background: #788895;
  }
  .buttonClosePrint {
    top: 0;
    left: 100%;
    color: #788895;
    background: #E0EDF3;
    position: sticky;
  }
  .buttonClosePrint:hover {
    color: white;
    background: #182C39;
  }
  .buttonPrintModal {
    bottom: 10%;
    color: #788895;
    position: fixed;
    background: #182C39;
  }
  .buttonPrintModal:hover {
    color: white;
  }
  .buttonLight {
    width: 130px;
    color: white !important;
    background: #48ACEC !important;
    padding: 8px 24px;
  }
  .buttonDark {
    width: 130px;
    color: #788895;
    background: #182C39;
    padding: 8px 24px;
  }
  .buttonDark:hover {
    color: white;
  }
  label {
    display: grid;
    justify-content: center;
  }
`
