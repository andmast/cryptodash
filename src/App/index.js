import React, { Component } from "react";
import "./App.css";
import Welcomemessage from "./Welcomemessage";
import styled, { css } from "styled-components";

const Mybutton = styled.div`
  color: green;
  ${props =>
    props.primary &&
    css`
      color: palevioletred;
    `}
`;

class App extends Component {
  render() {
    return (
      <div>
        <Welcomemessage />
        <Mybutton> Hello </Mybutton>
        <Mybutton primary> Hello </Mybutton>
      </div>
    );
  }
}

export default App;
