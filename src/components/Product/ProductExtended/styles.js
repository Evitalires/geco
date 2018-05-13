import css from 'styled-jsx/css'

export const styleProduct = css`
  .ProductExtended {
    padding: 16px;
    background: #E0EDF3;
  }
  .ProductExtended form {
    height: 100%;
    transition: .5s;
    margin: 8px 0px;
  }
  .ProductExtended label {
    display: block;
    color: #788895;
    width: 100%;
  }
  .ProductExtended input {
    width: 98%;
    color: #164461;
    transition: .5s;
    margin: 8px 0px;
    padding-left: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #788895;
  }
  .ProductExtended input:focus {
    border-bottom: 1px solid #48ACEC;
  }
  .ProductExtended p {
    display: none;
    color: red;
    margin: 0px;
    height: 30px;
    transition: .5s;
  }
  /**
   * For component Options
   */
  .ProductExtendedOptions {
    padding: 0px;
    height: 90px;
  }
  .ProductExtendedOptions h1 {
    margin: 0px;
    color: #788895;
    font-size: 16px;
    font-weight: 100;
  }
  .ProductExtendedOptions article {
    margin: 8px 0px;
    display: flex;
    flex-direction:column;
    border-bottom: 1px solid #788895;
  }
  .ProductExtendedOptions article:hover {
    border-bottom: 1px solid #48ACEC;
  }
  .ProductExtendedOptions:hover h1 {
    color: #48ACEC;
    transition: .3s;
  }
  .ProductExtendedOptions label {
    width: 45%;
    display: flex;
    padding-left: 8px;
    align-items: center;
    justify-content:space-between;
  }
  .ProductExtendedOptions label:hover {
    color: #164461;
    font-size: 18px;
    transition: .3s;
  }
  .ProductExtendedOptions input {
    width: 18px;
    height: 18px;
  }

`
