import css from 'styled-jsx/css'

export const stylesButton = css`
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
    margin: 0 36%;
    color: white;
    background: #48ACEC;
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
  }
  input[type=button] {
    border: none;
    height: 45px;
    outline: none;
    overflow:hidden;
    font-size: 24px;
    padding: 8px 16px;
    text-overflow: ellipsis;
  }

`
