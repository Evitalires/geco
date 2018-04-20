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
  .TotalRef h2 {
    color: #788895;
    margin: 20px 40px;
    font-size: 40px;
    border-bottom: 1px solid #164461;
  }
  .TotalText {
    width: 30%;
  }
  .TotalValor {
    width: 70%;
    text-align: right;
  }
  .Total .TotalValor:hover {
    color: white;
    transition: .9s;
    border-bottom: 1px solid #48ACEC;
  }
  .TotalButtons {
    display: flex;
    justify-content:space-around;
  }
`
