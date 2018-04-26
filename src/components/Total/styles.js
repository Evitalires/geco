import css from 'styled-jsx/css'

export const styleTotal = css`
  .Total {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: #164461;
    flex-direction:column;
    justify-content: space-between;
  }
  .TotalRef {
    display: inline-flex;
  }
  .TotalRef h2,
  .TotalRef h4 {
    color: #788895;
    margin: 16px 40px;
    font-size: 30px;
    border-bottom: 1px solid #164461;
  }
  .TotalRef h4 {
    font-size: 35px;
    color: white;
  }
  .TotalText {
    width: 30%;
    margin-left: 0px;
  }
  .TotalValor {
    width: 70%;
    text-align: right;
  }
  .Total .TotalValor:hover {
    color: white;
    transition: .9s;
  }
  .TotalButtons {
    display: flex;
    justify-content:space-around;
  }
`
