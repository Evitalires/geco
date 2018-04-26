import css from 'styled-jsx/css'

export const stylesButton = css`
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
    background: white;
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
  .buttonDark {
    width: 130px;
    color: #788895;
    background: #182C39;
    padding: 8px 24px;
  }
  .buttonDark:hover {
    color: white;
  }
  button {
    border: none;
    outline: none;
    font-size: 24px;
    padding: 8px 16px;
  }

`
