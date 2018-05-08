import css from 'styled-jsx/css'

export const styleProduct = css`
  /**
   * Styles for ProductSmall
   */
  .productSmall {
    height: 40px;
    overflow: hidden;
    width: 90%;
    margin: 8px auto;
    display: flex;
    align-items: center;
    padding: 8px 8px;
    border: 1px solid green;
    background-color: #C8D2D9;
  }
  .productSmall:hover {
    transition: .5s;
    background: #E0EDF3
  }
  .productSmall form {
    height: 100%;
    width: max-content;
    padding-left: 8px;
    border-right: 2px solid #788895;
  }
  .productSmall label,
  .productSmall p {
    display: none;
  }
  .productSmall input {
    margin: 0px;
    width: 80px;
    transition: .5s;
  }
  .productSmall input:focus {
    width: 200px;
    z-index: 10;
    border-bottom: 1px solid #48ACEC;
  }
  /**
   * Styles for Print
   */
  .ProductPrint {
    display: flex;
  }
  .ProductPrint .Id {
    display: none;
  }
  .ProductPrint form input {
    font-size: 14px;
    color: black;
  }
  .ProductPrint form label,
  .ProductPrint form p {
    display: none;
  }
`
