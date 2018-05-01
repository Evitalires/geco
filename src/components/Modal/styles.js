import css from 'styled-jsx/css'

export const ModalStyles = css`
  .Container {
    position: relative;
  }
  .overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modalStandard {
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    padding: 1em;
    overflow: scroll;
    position: absolute;
    background-color: #E0EDF3;
  }
  .modalComplete {
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    padding: 1em;
    overflow: scroll;
    position: absolute;
    background: #E0EDF3;
  }
  .modalAlert {
    top: 20%;
    left: 10%;
    right: 10%;
    bottom: 35%;
    padding: 1em;
    overflow: scroll;
    position: absolute;
    background-color: #E0EDF3;
  }
`
